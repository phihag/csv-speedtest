#!/usr/bin/env nodejs
'use strict';

var csv_parse = require('csv-parse');
var fs = require('fs');

function parse_csv(fn, cb) {
	var read_stream = fs.createReadStream(fn, {encoding: 'binary'});
	var parser = csv_parse({delimiter: ';'}, cb);
	read_stream.pipe(parser);
}

parse_csv('data.csv', function(err, lines) {
	if (err) throw err;
	console.log(lines.length + ' lines');
});