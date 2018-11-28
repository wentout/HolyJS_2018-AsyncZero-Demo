'use strict';

require('../model');

process.on('ModelCreation.User', (it) => {
	it.deleteMany({
		createAt: {
			$lt : (new Date())
		}
	}, (err, result) => {
		process._rawDebug('UserModel dropped', result);
		process.emit('sayToRun', 'dbReady');
	});
});