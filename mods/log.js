'use strict';

const clc  = require('cli-color');
const util = require('util');

const traceCaller = (n) => {
	const stack = (new Error()).stack;
	if( isNaN( n ) || n < 0) {
		n = 3;
	}
	return stack.split('\n').slice(n).join('\n');
};

const inspect = (arg) => {
	return (typeof arg == 'string') ?
		arg : arg.map((a) => {
			return (typeof a == 'string') ? a : util.inspect(a, {
				depth          : 7,
				colors         : true,
				maxArrayLength : 10
			});
		});
};

const log = function (...arg) {
	process._rawDebug.apply(null, inspect(arg));
};

log.trace = function (...arg) {
	process._rawDebug(`${clc.bgBlue('d')}\n${clc.blue(traceCaller())}`);
	process._rawDebug.apply(null, inspect(arg));
};

log.error = function (...arg) {
	process._rawDebug(`${clc.bgRed('e')} Error:\n${clc.red(traceCaller())}`);
	process._rawDebug.apply(null, inspect(arg));
};

log.alarm = function (msg) {
	process._rawDebug(`${clc.bgRed('A')}larm : ${clc.red(msg)}`);
};

module.exports = log;
