import chalk from 'chalk';
// const fs = require('fs');
// const path = require('path');




// _dirname is a global variable in Node.js, but not in Bun.
// what is the use of _dirname?
// it gives the absolute path of the current directory
// what is the use of path.join?
// it joins two or more paths and returns a single path
// why do we need a single path?
// because different operating systems use different path separators
// explain to me in a more way
// for example, in Windows the path separator is \ while in Linux and Mac it is /
// what is the path separator in Bun?
// it is /
// why do we need to use path.join instead of just using /?
// because if we use / it will not work in Windows
// why do we need path separators?
// what are path modules?
// path modules are used to work with file and directory paths
// what are some of the methods in path module?
// some of the methods in path module are join, resolve, basename, dirname, extname, parse, format
// what is path manipulation?
// path manipulation is the process of working with file and directory paths
// what is bun?
// bun is a fast all-in-one JavaScript runtime


console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));
console.log(chalk.yellow('This is a warning message.'));
console.log(chalk.bgBlue('This is a message with a blue background.'));