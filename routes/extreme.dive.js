'use strict';

const log = require('../mods/log');
const ioc = require('../mods/ioc');

const dive = require('context-dive');

var userModel = null;
process.on('ModelCreation.User', (it) => {
	userModel = it;
});


module.exports = (STATE_STRING, req, res) => {

	setTimeout(() => {

		const crypt = req.params.crypt;

		log(`${STATE_STRING} enter : ${req.id}`);

		if (dive.ctx) {
			log(`${STATE_STRING} : dive.ctx req.id enter : ${dive.ctx.id}`);
		}

		userModel.findOne({
			crypt
		}, (err, result) => {

			if (err) {
				res.status(404);
				res.end('not found');
				return;
			}

			res.end(JSON.stringify(result));

			const runFailure = ioc.get('applyFail');
			if (runFailure) {
				return setTimeout(() => {
					require('./fail')();
				}, 100);
			}

			log(`${STATE_STRING} exit : ${req.id}`);

			if (dive.ctx) {
				log(`${STATE_STRING} : dive.ctx req.id exit : ${dive.ctx.id}`);
				dive.emerge(); // !!! important
			}

		});

	}, 100);

};


