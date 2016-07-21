#!/usr/bin/env node
'use strict';

var csv_parse = require('csv-parse');
var fs = require('fs');

var read_stream = fs.createReadStream('data.csv', {encoding: 'utf8'});
var parser = csv_parse({}, function(err, lines) {
	if (err) throw err;
	console.log(lines.length + ' lines');
});
read_stream.pipe(parser);
