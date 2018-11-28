'use strict';

var userModel = null;
process.on('ModelCreation.User', (it) => {
	userModel = it;
});

module.exports = (req, res) => {
	if (!userModel) {
		return res.end('Maintenance, please wait!');
	}
	userModel.getNew((err, user) => {
		res.end(JSON.stringify(user));
	});
};