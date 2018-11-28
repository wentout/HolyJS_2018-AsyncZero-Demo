'use strict';

// --allow-natives-syntax

setTimeout(() => {

	const s = {}; // storage

	var exists = 0;
	var empty = 0;

	const task = () => {
		if (exists > 100) {
			process._rawDebug(`exists: ${exists}`);
			process._rawDebug(`empty: ${empty}`);
			%DebugTrace();
			setTimeout(() => {
				process.exit(0);
			}, 1000);
		}
		require('fs').readFile('test.js', 'utf8', (err, buf) => {
			s.a = buf.toString();
		});
		setTimeout(() => {
			if (s.a) {
				delete s.a;
				exists++;
			} else {
				empty++;
			}
			setTimeout(task, 0);
		}, 0);
	};
	task();

}, 1000);
