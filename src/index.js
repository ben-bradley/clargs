'use strict';

import args from 'argify';
import inquirer from 'inquirer';

export default function clargs(questions) {
  return new Promise((resolve, reject) => {
    // remove questions answered by args
    questions = questions.filter((q) => !args[q.name] );

    if (!questions.length)
      return resolve(clean(args));

    try {
      inquirer.prompt(questions, (answers) => {
        for (var a in answers) args[a] = answers[a];
        resolve(clean(args));
      });
    }
    catch (err) {
      reject(err);
    }
  });
}

function clean(args) {
  for (var a in args) {
    if (args[a] === 'false' || args[a] === false)
      args[a] = false;
    else if (args[a] === 'true' || args[a] === true)
      args[a] = true;
    else if (Number(args[a]))
      args[a] = Number(args[a]);
  }
  return args;
}
