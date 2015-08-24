'use strict';
/* global describe, it */

var assert = require('assert');
var fs = require('fs');

var convert = require('..');

describe('fixtures', function(){
	var directory = __dirname + '/fixtures';
	fs.readdirSync(directory).filter(function(file){
		return file.substr(file.length - 3, 3) === '.in';
	}).forEach(function(file){
		it(file, function(done){
			var input = fs.readFileSync(directory + '/' + file, 'utf-8');
			var output = fs.readFileSync(directory + '/' + file.replace(/\.in$/, '.out'), 'utf-8');
			assert.equal(convert(input), output);
			done();
		});
	});
});
