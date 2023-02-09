import readLine from 'readline-sync'

function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  let name = readLine.question('Please enter your name: ');

  callback(name);
}

processUserInput(greeting);