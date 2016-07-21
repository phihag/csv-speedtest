#!/usr/bin/env node
'use strict';

var Papa = require('papaparse');
var fs = require('fs');

fs.readFile('data.csv', {encoding: 'utf8'}, function(err, fcontents) {
	if (err) throw err;
	Papa.parse(fcontents, {
		complete: function(res) {
			var lines = res.data;
			console.log(lines.length + ' lines');
		},
	});
});
