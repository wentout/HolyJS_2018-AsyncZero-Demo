'use strict';

const log = require('../mods/log');
const ioc = require('../mods/ioc');

var userModel = null;
process.on('ModelCreation.User', (it) => {
	userModel = it;
});


module.exports = (STATE_STRING, req, res) => {

	setTimeout(() => {

		const crypt = req.params.crypt;

		log(`${STATE_STRING} enter : ${req.id}`);

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

		});

	}, 100);

};


