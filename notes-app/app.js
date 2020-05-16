// We can require our own files, this makes the file to run alognside the current file.
// If we just require a file that means it is not exporting anything, if the file exports something then that something has to be store in a variable
require('./chalkChallenge');
const validator = require('validator'); // Importing npm modules is like importing core modules, we pass the name of the package
const { name, add } = require('./utils');
const getNotes = require('./notes');
const msg = getNotes();

console.log(add(4, -2), name);
console.log(msg);
console.log(validator.isEmail('a@.com'));