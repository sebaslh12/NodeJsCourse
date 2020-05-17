// We can require our own files, this makes the file to run alognside the current file.
// If we just require a file that means it is not exporting anything, if the file exports something then that something has to be store in a variable
// Importing npm modules is like importing core modules, we pass the name of the package
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	handler: () => console.log('Adding a new note')
});

yargs.command({
	command: 'remove',
	describe: 'Removes a note',
	handler: () => console.log('Removing a note')
});

yargs.command({
	command: 'list',
	describe: 'List the notes',
	handler: () => console.log('Listing notes')
});

yargs.command({
	command: 'read',
	describe: 'Read note',
	handler: () => console.log('Reading note')
});

console.log(yargs.argv)