
module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal-asciinema <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * GPLv3 licensed\n' +
				' *\n' +
				' * Copyright (C) 2016 Rob Lemley <roblemley@gmail.com>\n' +
				' */'
		},
		'curl-dir': {
			'vendor/': [
				'https://github.com/asciinema/asciinema-player/releases/download/v2.2.0/asciinema-player.js',
				'https://github.com/asciinema/asciinema-player/releases/download/v2.2.0/asciinema-player.css'
			]
		},
		template: {
			js: {
				template: "asciinema-player.template.js",
				dest: "asciinema-player.js"
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-curl');
	grunt.loadNpmTasks('grunt-contrib-template');
	
	// Default task
	grunt.registerTask( 'default', [ 'build' ] );
	
	// Build task
	grunt.registerTask( 'build', [ 'curl-dir', 'template' ] );
};
