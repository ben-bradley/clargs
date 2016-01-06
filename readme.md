# clargs

I found myself writing a lot of CLI apps that used `argify` to convert command-line args into values that I could use in code.  This worked well, but I was constantly having to crack open the script source to remind myself which args a particular script expected.

I like being prompted to provide arguments, but sometimes I want to just 'up-arrow+enter' a script instead.

To address this, I wrote `clargs` to combine the functionality of `argify` with the super-awesome `inquirer` module.  The idea is that you can provide args at the command-line, and get prompted for the ones you forget

## Use

Using `clargs` is simple.  Because it has the potential to accept user input, I have it return a promise so that you can integrate it cleanly into your app.

`clargs` accepts an array of Inquirer question objects.  The `name` property of each question correlates to the `--` argument specified at run-time.  For example:

```javascript
/**
 * $ node ./myscript.js --foo=bar
 */

 // myscript.js
'use strict';

var clargs = require('clargs');

var questions = [{
  type: 'input',
  name: 'foo', // --foo=bar
  message: 'foo'
}, {
  type: 'confirm',
  name: 'baz', // there was no --baz so this question is asked
  message: 'baz?',
  default: true
}];

clargs(questions)
	.then(function(args) {
		console.log('Args:', args);
    /**
     * { foo: 'bar', baz: true }
     */
	});
```

## Versions

- 0.1.0 - Removed `q` dependency, updated deps
- 0.0.1 - Initial commit
