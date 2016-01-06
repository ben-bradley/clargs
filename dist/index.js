'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = clargs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argify = require('argify');

var _argify2 = _interopRequireDefault(_argify);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function clargs(questions) {
  return new Promise(function (resolve, reject) {
    // remove questions answered by args
    questions = questions.filter(function (q) {
      return !_argify2['default'][q.name];
    });

    if (!questions.length) return resolve(clean(_argify2['default']));

    try {
      _inquirer2['default'].prompt(questions, function (answers) {
        for (var a in answers) _argify2['default'][a] = answers[a];
        resolve(clean(_argify2['default']));
      });
    } catch (err) {
      reject(err);
    }
  });
}

function clean(args) {
  for (var a in args) {
    if (args[a] === 'false' || args[a] === false) args[a] = false;else if (args[a] === 'true' || args[a] === true) args[a] = true;else if (Number(args[a])) args[a] = Number(args[a]);
  }
  return args;
}
module.exports = exports['default'];