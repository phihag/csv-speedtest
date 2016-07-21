#!/usr/bin/env node
'use strict';

var csv = require('fast-csv');


var lines = [];
csv
	.fromPath('data.csv')
	.on('data', function(line){
		lines.push(line);
	})
	.on('end', function(){
		console.log(lines.length + ' lines');
	});
