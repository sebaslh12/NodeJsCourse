// We can require our own files, this makes the file to run alognside the current file.
// If we just require a file that means it is not exporting anything, if the file exports something then that something has to be store in a variable
// Importing npm modules is like importing core modules, we pass the name of the package
const chalk = require('chalk');
const getNotes = require('./notes');

const command = process.argv[2]

console.log(process.argv);

if (command === 'add') console.log('Adding note!');
else if (command === 'remove') console.log('Removing note!');