console.log("Hello everyone!");

const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));


console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

 
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));

const miles = 18;
const calculateFeet = miles => miles * 5280;
 
console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);

const chalkAnimation = require('chalk-animation');
 
chalkAnimation.rainbow('Lorem ipsum dolor sit amet');