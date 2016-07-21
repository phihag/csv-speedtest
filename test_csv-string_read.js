#!/usr/bin/env node
'use strict';

var CSV = require('csv-string');
var fs = require('fs');

fs.readFile('data.csv', {encoding: 'utf8'}, function(err, fcontents) {
	if (err) throw err;
	
	var lines = CSV.parse(fcontents);
	console.log(lines.length + ' lines');
});
