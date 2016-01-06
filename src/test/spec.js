'use strict';

import should from 'should';
import clargs from '../';

let questions = [{
  type: 'input',
  name: 'foo',
  message: 'foo',
  default: 'bar'
}, {
  type: 'confirm',
  name: 'baz',
  message: 'baz',
  default: true
}, {
  type: 'input',
  name: 'num',
  message: 'Type a number'
}];

describe('clargs', () => {

  it('should pass', (done) => {
    clargs(questions)
    	.then((args) => {
        (args.foo).should.eql('foo');
        (args.baz).should.eql('baz');
        (args.num).should.eql('num');
        done();
    	});
  });

});
