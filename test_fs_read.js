#!/usr/bin/env node
'use strict';

var fs = require('fs');

fs.readFile('data.csv', {encoding: 'utf8'}, function(err, fcontents) {
	if (err) throw err;
	var lines = fcontents.split('\n');
	console.log(lines.length + ' lines');
});
