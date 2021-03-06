// We can require our own files, this makes the file to run alognside the current file.
// If we just require a file that means it is not exporting anything, if the file exports something then that something has to be store in a variable
// Importing npm modules is like importing core modules, we pass the name of the package
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => notes.addNote(argv.title, argv.body)
});

yargs.command({
	command: 'remove',
	describe: 'Removes a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => notes.removeNote(argv.title)
});

yargs.command({
	command: 'list',
	describe: 'List the notes',
	handler: () => notes.listNotes()
});

yargs.command({
	command: 'read',
	describe: 'Read note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler: (argv) => notes.readNote(argv.title)
});

yargs.parse();