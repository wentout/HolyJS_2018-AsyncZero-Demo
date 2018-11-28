#!/usr/bin/env node

'use strict';

const repl = require('repl-sockets');

const SOCKET_FILE_PATH = require('path')
	.join(process.cwd(), 'tmp/repl.sock');
repl.client(SOCKET_FILE_PATH);
