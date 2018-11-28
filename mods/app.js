'use strict';

const crypto = require('crypto');

const ioc = require('./ioc');

const express = require('express');
const app = express();
const favicon = require('serve-favicon');

app.set('port', ioc.get('port'));
app.set('requestTimeout', 5*1000);

const faviconPath = require('path')
	.join(__dirname, '..', 'content', 'favicon.ico');

app.use(favicon(faviconPath));

app.use((req, res, next) => {
	
	req.id = crypto.randomBytes(16).toString('hex');
	next();
	
});

app.disable('x-powered-by');


ioc.set('app', app);
ioc.set('express', express);
