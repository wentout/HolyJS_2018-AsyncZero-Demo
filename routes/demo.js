'use strict';

const ioc = require('../mods/ioc');
const app = ioc.get('app');

const getNew = require('./getNew');

app.use('/demo/new', getNew);

const find = require('./find.js');

app.use('/demo/find/:crypt', find);

