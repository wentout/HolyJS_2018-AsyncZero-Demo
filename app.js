'use strict';

const ioc = require('./mods/ioc');

const modules = {};

// order dependent loader
[
	// express + app
	'app',
	'httpServer',
	'models',
	'db',
	'repl',
	'errors',
	'errors.dive',

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
