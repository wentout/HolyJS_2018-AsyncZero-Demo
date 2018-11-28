'use strict';

const highlight = require('cli-highlight').highlight;
const chalk = require('chalk');
const fs = require('fs');

const util = require('util');

const mongoose = require('mongoose');

const SOCKET_FILE_PATH = require('path')
	.join(process.cwd(), 'tmp/repl.sock');

const HISTORY_FILE_PATH = require('path')
	.join(process.cwd(), 'tmp/repl.hist');


const repl = require('repl-sockets');
const dive = require('context-dive');

const ioc = require('./ioc');

const p = {
	get e() {
		process.exit(0);
		return undefined;
	},
	get c() {
		process.stdout.write('\x1Bc');
		return 'done';
	}
};


const enableRequestTimeout = () => {
	ioc.set('requestTimeoutEnabled', true);
	return 'done';
};

const disableRequestTimeout = () => {
	ioc.set('requestTimeoutEnabled', false);
	return 'done';
};

const enableFailure = () => {
	ioc.set('applyFail', true);
	return 'done';
};

const disableFailure = () => {
	ioc.set('applyFail', false);
	return 'done';
};

const enableDive = () => {
	ioc.set('applyDive', true);
	return 'done';
};

const enableHooks = () => {
	dive.enableAsyncHooks();
	return 'done';
};

const enableHop = () => {
	mongoose.Model.findOne = dive.hopAutoWrap(mongoose.Model.findOne);
	return 'done';
};

const inspect = () => {
	require('inspector').open();
	return 'done';
};



const enableUncaughtExcepctionHandler = () => {
	process.emit('enableUncaughtExcepctionHandler');
	return 'done';
};

const disableUncaughtExcepctionHandler = () => {
	process.emit('disableUncaughtExcepctionHandler');
	return 'done';
};

const enableDiveUncaughtExcepction = () => {
	disableUncaughtExcepctionHandler();
	process.emit('enableUncaughtExcepctionHandler:dive');
	return 'done';
};

const disableDiveUncaughtExcepction = () => {
	process.emit('disableUncaughtExcepctionHandler:dive');
	return 'done';
};

const destroyAllHTTPRequests = () => {
	process.emit('destroyAllHTTPRequests');
	return 'done';
};

const enableReferenceError = () => {
	ioc.set('referenceErrorEnabled', true);
	return 'done';
};

const disableReferenceError = () => {
	ioc.set('referenceErrorEnabled', false);
	return 'done';
};

const enableRequestTimeoutGoodDestroy = () => {
	ioc.set('requestTimeoutGoodDestroy', true);
	return 'done';
};

const disableRequestTimeoutGoodDestroy = () => {
	ioc.set('requestTimeoutGoodDestroy', false);
	return 'done';
};

const removeUncaughtExceptionListeners = () => {
	process.removeAllListeners('uncaughtException');
};

const enableEverything = () => {
	enableDiveUncaughtExcepction();
	enableRequestTimeout();
	enableFailure();
	enableDive();
	enableHooks();
	enableHop();
	return 'done';
};

const toStdout = process.stdout.write.bind(process.stdout);
const makePrint = (str, printNumbers) => {
	var num = 0;
	str = str.split('\n').map(part => {
		num++;
		return `${printNumbers ? num : ''}\t${part}`;
	}).join('\n');

	toStdout('\n');
	toStdout(highlight(str, {
		language: 'javascript',
		theme: {
			keyword: chalk.blue,
			string: chalk.green,
			function: chalk.yellow
		}
	}));
	toStdout('\n');
	return 'done';
};


const print = (ptr, clear = true) => {
	if (!ptr) {
		return 'missing pointer';
	}

	if (clear) {
		toStdout('\x1Bc');
	}

	var str;
	if (typeof ptr === 'function') {
		str = ptr.toString();
	} else {
		str = util.inspect(ptr);
	}

	return makePrint(str);
};

const printFile = (filename, clear = true) => {

	const resolvedName = require.resolve(`../${filename}`);
	if (resolvedName instanceof Error) {
		return 'file does not exists';
	}

	if (clear) {
		toStdout('\x1Bc');
	}

	return makePrint(fs.readFileSync(resolvedName).toString(), 1);
};

const context = {

	p,

	_dive: dive,

	enableFailure,
	disableFailure,

	enableRequestTimeout,
	disableRequestTimeout,

	enableRequestTimeoutGoodDestroy,
	disableRequestTimeoutGoodDestroy,

	enableHooks,
	enableHop,

	enableEverything,

	enableUncaughtExcepctionHandler,
	disableUncaughtExcepctionHandler,

	enableReferenceError,
	disableReferenceError,

	destroyAllHTTPRequests,
	removeUncaughtExceptionListeners,

	inspect,
	ioc,
	
	mods: ioc.get('modules'),

	dive: {
		enable: enableDive,
		enableDiveUncaughtExcepction,
		disableDiveUncaughtExcepction
	},
	enableDiveUncaughtExcepction,
	enableDive,

	route(name) {
		if (name) {
			ioc.set('routeLevel', name);
		}
		return ioc.get('routeLevel');
	},

	get routes() {
		return ioc.get('AvailableLevels').join(' ');
	},

	get context() {
		return context;
	},
	
	repl: {},

	print,
	printFile,
	makePrint,

	exit() {
		process.exit(0);
	}
	
};

repl
	.server(SOCKET_FILE_PATH, {

		context,

		historyPath: HISTORY_FILE_PATH

	}, (socket, _repl) => {

		context.repl.instance = _repl;
		context.repl.socket = socket;

		_repl.prompt();

	});


// context.repl.socket.write(ptr.toString());
// process._rawDebug(util.inspect(ptr.toString()));
