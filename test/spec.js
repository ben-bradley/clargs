var should = require('should'),
  debug = require('debug')('test/spec');

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
}, {
  type: 'input',
  name: 'num',
  message: 'Type a number'
}];

debug('starting tests...');

describe('clargs', function () {

  it('should pass', function (done) {
    clargs(questions)
    	.then(function(args) {
    		console.log('Args:', args);
        done();
    	});
  });

});
