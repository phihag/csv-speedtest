#!/usr/bin/env node
'use strict';

var fs = require('fs');
var CSV = require('comma-separated-values');


fs.readFile('data.csv', {encoding: 'utf8'}, function(err, fcontents) {
	if (err) throw err;
	var lines = CSV.parse(fcontents, {});
	console.log(lines.length + ' lines');
});
