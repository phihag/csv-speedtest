#!/usr/bin/env node
'use strict';

var csv_parse = require('csv-parse');
var fs = require('fs');

fs.readFile('data.csv', {encoding: 'utf8'}, function(err, fcontents) {
	if (err) throw err;
	csv_parse(fcontents, {}, function(err, lines) {
		if (err) throw err;
		console.log(lines.length + ' lines');
	});
});
