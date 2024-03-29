'use strict';

const log = require('./log');
const ioc = require('./ioc');

const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/holyjs_demo', {
		useNewUrlParser : true,
		useUnifiedTopology: true
	})
	.then(() => {
		log('Connected to HolyJS Demo DB');
		process.emit('sayToRun', 'dbConnected');
	})
	.catch((error) => {
		if (error) {
			log.error(error);
			return;
		}
	});

ioc.set('mongoose', mongoose);

module.exports = mongoose;