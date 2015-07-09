'use strict';

var clargs = require('../');

var questions = [{
  type: 'input',
  name: 'foo',
  message: 'foo',
  default: 'bar'
}, {
  type: 'confirm',
  name: 'baz',
  message: 'baz?',
  default: true
}];

clargs(questions)
	.then(function(args) {
		console.log('Args:', args);
	});
