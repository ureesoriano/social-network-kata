const readline = require('readline');
const CommandDispatcher = require('./src/infrastructure/commandDispatcher');

console.log("\nWelcome to the Awesome social network\nPlease enter your command:\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commandDispatcher = new CommandDispatcher();

rl.on('line', (command) => {
  commandDispatcher.dispatch(command);
});

