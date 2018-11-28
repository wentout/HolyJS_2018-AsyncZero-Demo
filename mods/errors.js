'use strict';

const log = require('./log');

const uncaughtExceptionHandler = (error) => {
	log.error(error);
};

process.on('enableUncaughtExcepctionHandler', () => {
	process.on('uncaughtException', uncaughtExceptionHandler);
	process._rawDebug('Listener 4 uncaughtException enabled\n');
});

process.on('disableUncaughtExcepctionHandler', () => {
	process.off('uncaughtException', uncaughtExceptionHandler);
	process._rawDebug('Listener 4 uncaughtException disabled\n');
});



