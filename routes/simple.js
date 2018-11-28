'use strict';

const log = require('../mods/log');
const ioc = require('../mods/ioc');

var userModel = null;
process.on('ModelCreation.User', (it) => {
	userModel = it;
});


module.exports = (STATE_STRING, req, res) => {

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

		const runFailure = ioc.get('applyFail');
		if (runFailure) {
			require('./fail')();
		}

		res.end(JSON.stringify(result));
		
		log(`${STATE_STRING} exit : ${req.id}`);

	});
};


