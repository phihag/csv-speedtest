#!/usr/bin/env nodejs
'use strict';

var csv_parse = require('csv-parse');
var fs = require('fs');

function parse_csv(fn, cb)  {
	fs.readFile(fn, {encoding: 'utf8'}, function(err, fcontents) {
		if (err) return cb(err);

		csv_parse(fcontents, {delimiter: ';'}, cb);
	});
}

parse_csv('data.csv', function(err, lines) {
	if (err) throw err;
	console.log(lines.length + ' lines');
});