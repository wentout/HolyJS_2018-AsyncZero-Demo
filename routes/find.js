'use strict';

const dive = require('context-dive');

const ioc = require('../mods/ioc');
const log = require('../mods/log');


const

	start = require('./start'),

	simple = require('./simple'),
	hard = require('./hard'),
	extreme = require('./extreme'),



	simple_dive = require('./simple.dive'),
	hard_dive = require('./hard.dive'),
	extreme_dive = require('./extreme.dive');



const levels = {


	start,

	// general modules
	simple: simple.bind(simple, 'SIMPLE LEVEL'),
	simple_a: simple.bind(simple, 'SIMPLE LEVEL One Else'),
	simple_b: simple.bind(simple, 'SIMPLE LEVEL Third'),

	hard: hard.bind(hard, 'HARD LEVEL'),
	hard_a: hard.bind(hard, 'HARD LEVEL'),

	extreme: extreme.bind(extreme, 'EXTREME LEVEL'),
	extreme_a: extreme.bind(extreme, 'EXTREME LEVEL'),


	// async hooked modules
	'simple:dive': simple_dive.bind(simple_dive, 'SIMPLE LEVEL : DIVE'),
	'hard:dive': hard_dive.bind(hard_dive, 'HARD LEVEL : DIVE'),
	'extreme:dive': extreme_dive.bind(extreme_dive, 'EXTREME LEVEL : DIVE'),


};


const levelsKeys = Object.keys(levels);
ioc.set('AvailableLevels', levelsKeys);


const getRoute = () => {

	const routeLevel = ioc.get('routeLevel');

	if (!levelsKeys.includes(routeLevel)) {
		log(`No such route : ${routeLevel}`);
		return;
	}

	return levels[routeLevel];

};


module.exports = (req, res) => {

	const route = getRoute();

	if (!route) {
		res.status(418).end('I\'m teapot');
		return;
	}

	applyDive(route)(req, res);

};





// *** DIVE WRAPPER *** //

function applyDive(route) {

	if (!ioc.get('applyDive')) {
		return route;
	}

	return (req, res) => {
		dive(route, req)(req, res);
	};


}