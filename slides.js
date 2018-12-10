'use strict';

const ioc = require('./mods/ioc');

ioc.set('port', 9091);

const modules = {};

// order dependent loader
[
	// express + app
	'app',
	'httpServer',
	'models',
	'db',
	'errors',

].forEach(name => {

	modules[name] = require(`./mods/${name}`);
	
	ioc.set('modules', modules);

	// routes
	[

		// talk slides
		'slides',

		// talk demo
		'demo',

	].forEach(name => {
		require(`./routes/${name}`);
	});
});
