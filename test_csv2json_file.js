#!/usr/bin/env node
'use strict';

var csv2json = require('csv2json');

var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile('data.csv', function(err, lines) {
	if (err) throw err;
	console.log(lines.length + ' lines');
});
