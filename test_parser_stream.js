#!/usr/bin/env node
'use strict';

var csv = require('csv-parser')
var fs = require('fs')

var lines = []; 
fs.createReadStream('data.csv')
	.pipe(csv())
	.on('data', function(row) {
		lines.push(row);
	})
	.on('finish', function() {
		console.log(lines.length + ' lines');
	});
