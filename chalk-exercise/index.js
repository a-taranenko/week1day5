var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + "!";

console.log(message);

var myTheme = chalk.bold.red;

console.log(chalk.bgBlack.white("It is") + " " + myTheme("hot") + " " + chalk.underline("today!"));