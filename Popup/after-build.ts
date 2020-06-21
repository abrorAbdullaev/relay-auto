const fs = require('fs')
const ncp = require('ncp').ncp;
const chalk = require('chalk');

ncp.limit = 16;

console.log(chalk.blue('Start executing after-build script'));

const cp = () => new Promise((res, rej) => {
  ncp('./build', '../plugin/popup', function (err) {
    if (err) {
      console.log(chalk.red('Error on build folder copy'));
      console.log(chalk.red(err));
      rej();
    }

    console.log(chalk.green('Copied build folder'));
    res();
  });
});

cp().then(() => {
  fs.readFile('../plugin/popup/index.html', 'utf8', function (err,data) {
    if (err) {
      console.log(chalk.red('Error on parsing build index.html'));
      console.log(chalk.red(err));
    }
    const result = data.replace(/static/g, 'popup/static');

    fs.writeFile('../plugin/popup/index.html', result, 'utf8', function (err) {
      if (err) return console.log(chalk.red(err));
    });

    console.log(chalk.green('Successfully finished after-build script'));
  });
})
