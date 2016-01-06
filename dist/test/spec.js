'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var questions = [{
  type: 'input',
  name: 'foo',
  message: 'foo',
  'default': 'bar'
}, {
  type: 'confirm',
  name: 'baz',
  message: 'baz',
  'default': true
}, {
  type: 'input',
  name: 'num',
  message: 'Type a number'
}];

describe('clargs', function () {

  it('should pass', function (done) {
    (0, _2['default'])(questions).then(function (args) {
      args.foo.should.eql('foo');
      args.baz.should.eql('baz');
      args.num.should.eql('num');
      done();
    });
  });

  it('should throw', function (done) {
    (0, _2['default'])([{ type: 'input', name: 'fail' }]).then(function () {
      return done('uhoh, didn\'t catch');
    })['catch'](function (err) {
      done();
    });
  });
});