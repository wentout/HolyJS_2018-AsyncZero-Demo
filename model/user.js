'use strict';

const crypto = require('crypto');

const mongoose = require('mongoose');
const moment = require('moment');

const modelOpts = {
	timestamps : { 
		createdAt: 'createAt',
		updatedAt: 'updateAt'
	},
	minimize   : false,
	autoIndex  : false
};

const userSchemaDefinition = {
	crypt : String,
	birth : Date
};

const UserSchema = new mongoose.Schema(userSchemaDefinition, modelOpts);

const randNum = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const randId = () => {
	return crypto.randomBytes(24).toString('hex');
};


UserSchema.statics.getNew = function (cb) {
	
	const
		year = randNum(1970, 2018),
		month = randNum(1, 12),
		day = randNum(1, 28);
	
	const birth = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
	const crypt = randId();
	
	const userExample = new this({
		crypt, birth
	});
	
	userExample.save(cb);
};

UserSchema.statics.cleanup = function (cb) {
	this.remove({}, cb);
};

module.exports = UserSchema;