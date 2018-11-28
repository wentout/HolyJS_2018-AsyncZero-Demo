'use strict';

const mongoose = require('mongoose');

const createModels = () => {
	const it = mongoose.model('User', require('./user'));
	process.emit('ModelCreation.User', it);
};

process.on('sayToRun', (name) => {
	if (name == 'dbConnected') {
		createModels();
	}
});