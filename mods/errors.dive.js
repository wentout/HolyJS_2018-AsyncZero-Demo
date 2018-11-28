
'use strict';

const log = require('./log');

const dive = require('context-dive');


const uncaughtExceptionHandler = (error) => {

	if (! dive.ctx) {
		log.error(error);
		return;
	}

	const req = dive.ctx;
	
	log.error(dive.adjustErrorStack(error));

	log(`\n\nERROR dive.ctx req.id : ${req.id}\n\n`);

	req.res.status(503).end('We solving this problem. Please come later.');

	dive.uncaughtExceptionHandler(); // !! important if no fail

	// process.exit(1);

};

process.on('enableUncaughtExcepctionHandler:dive', () => {
	process.on('uncaughtException', uncaughtExceptionHandler);
	process._rawDebug('Listener & dive 4 uncaughtException enabled\n');
});

process.on('disableUncaughtExcepctionHandler:dive', () => {
	process.off('uncaughtException', uncaughtExceptionHandler);
	process._rawDebug('Listener & dive 4 uncaughtException disabled\n');
});
