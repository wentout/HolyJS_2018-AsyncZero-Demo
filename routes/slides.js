'use strict';

const path = require('path');

const ioc = require('../mods/ioc');
const app = ioc.get('app');
const express = ioc.get('express');

const rr = (name, ...args) => {
	return path.resolve(require.resolve(name), ...args);
};
const revealBasePath = rr('reveal.js', '..', '..');
const highlightPath = rr('highlight.js', '..', '..');

const staticsPaths = ['css', 'js', 'lib', 'plugin'].reduce((obj, name) => {
	obj[`/${name}`] = path.join(revealBasePath, name);
	return obj;
}, Object.create(null));
staticsPaths['/lib/css/'] = path.join(highlightPath, 'styles');


Object.entries(staticsPaths).forEach(([path, dir]) => {
	app.use(path, express.static(dir));
});

app.use('/', express.static('content'));
app.use('/slides', express.static('slides'));