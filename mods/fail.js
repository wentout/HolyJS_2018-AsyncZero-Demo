'use strict';

const ioc = require('./ioc');

module.exports = () => {


	if (ioc.get('referenceErrorEnabled')) {

		process._rawDebug('\n\n\nRUN: Reference Error\n\n\n');

		// eslint-disable-next-line
		const a = b;

		return;
	}
	
	process._rawDebug('\n\n\nHITTING Special Failure');
	
	throw new Error('Special Failure');

};
