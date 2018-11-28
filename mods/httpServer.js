'use strict';

const
	clc = require('cli-color'),

	ioc = require('./ioc'),
	app = ioc.get('app'),
	logger = require('./log'),

	log = (message) => {
		logger(`${clc.bgBlue(' ')} ${clc.blue('HTTP Server info')} : ${message}`);
	},

	HTTP_PORT = app.get('port'),
	REQUEST_TIMEOUT = app.get('requestTimeout'),

	SOCKETS = Symbol('server sockets'),
	NEED_BREAK = Symbol('need to shudtown server'),
	IS_SOCKET_BUSY = Symbol('is socket busy'),

	http = require('http'),
	httpServer = new http.Server();

httpServer[SOCKETS] = new Set();
httpServer[NEED_BREAK] = false;

const logExclude = ['/favicon.ico'];

httpServer
	.on('listening', () => {
		const address = httpServer.address();
		log(`port ${clc.green(address.port)} pid ${process.pid}`);
		process.emit('sayToRun', 'httpServerInitDone');
	})
	.on('close', () => {
		log('All connections are closed');
	})
	.on('connection', (socket) => {
		httpServer[SOCKETS].add(socket);
		socket.once('close', () => {
			httpServer[SOCKETS].delete(socket);
		});
		socket.on('timeout', () => {
			socket.destroy();
		});
	})
	.on('request', (req, res) => {

		const started = Date.now();

		const socket = req.socket;
		socket[IS_SOCKET_BUSY] = true;

		res.finalize = () => {

			if (!socket[IS_SOCKET_BUSY]) {
				return;
			}

			socket[IS_SOCKET_BUSY] = false;
			// if we need to break all connections
			// we will close socket after all requests
			if (httpServer[NEED_BREAK]) {
				socket.destroy();
			}

			if (logExclude.includes(req.url)) {
				return;
			}

			const status =
				clc[res.statusCode == 200 ? 'green' : 'red'](res.statusCode);
			log(`${clc.bgGreen(' ')} ${req.method} ${req.originalUrl} ${status} ${Date.now() - started} ms`);

		};

		res.once('finish', res.finalize);
		res.once('close', res.finalize);

		if (ioc.get('requestTimeoutEnabled')) {
			res.setTimeout(REQUEST_TIMEOUT, () => {
				
				if (ioc.get('requestTimeoutGoodDestroy')) {
				
					log(`${clc.bgRed(' ')} socket timeout reached ${req.url}`);
					res.status(500).end('<h1>500 oops</h1>');
					
				} else {
					
					socket.destroy();
					
				}
				
			});
		}

		app(req, res);
	});


// === Run Server, Run! ===
process.on('sayToRun', (name) => {
	if (name == 'dbReady') {
		httpServer.listen(HTTP_PORT);
	}
});


ioc.set('httpServer', httpServer);

process.on('destroyAllHTTPRequests', () => {
	httpServer[SOCKETS].forEach(socket => {
		socket.destroy();
	});
});