#!/usr/bin/env node
'use strict';

var csv = require('fast-csv');
var fs = require('fs');


var stream = fs.createReadStream('data.csv', {encoding: 'utf8'});
var lines = [];
var csvStream = csv()
	.on('data', function(line){
		lines.push(line);
	})
	.on('end', function(){
		console.log(lines.length + ' lines');
	});

stream.pipe(csvStream);