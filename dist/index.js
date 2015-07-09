'use strict';

var q = require('q'),
    args = require('argify'),
    inquirer = require('inquirer');

var Promise = Promise || q.Promise;

module.exports = function (questions) {
  return new Promise(function (resolve, reject) {
    questions = questions.filter(function (a) {
      return !args[a.name];
    });

    if (!questions.length) return resolve(clean(args));

    inquirer.prompt(questions, function (answers) {
      for (var a in answers) args[a] = answers[a];
      resolve(clean(args));
    });
  });
};

function clean(args) {
  for (var a in args) {
    if (args[a] === 'false' || args[a] === false) args[a] = false;else if (args[a] === 'true' || args[a] === true) args[a] = true;else if (Number(args[a])) args[a] = Number(args[a]);
  }
  return args;
}