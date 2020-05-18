const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({ title, body });
		saveNotes(notes);
	} else {
		console.log(chalk.bold.red.inverse('Note Already Exists!!'));
	}
}

const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);
	if (note) {
		console.log(chalk.green.inverse(note.title), note.body);
	} else {
		console.log(chalk.bold.red.inverse('Note Not Found!!'));
	}
}

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.blueBright.inverse('Your Notes'));
	notes.forEach(note => console.log(note.title));
}

const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);

	if (notes.length !== notesToKeep.length) {
		console.log(chalk.green.bold.inverse(`Note ${title} Removed`));
		saveNotes(notesToKeep);
	} else {
		console.log(chalk.red.bold.inverse('Note not found'));
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
	try {
		const data = fs.readFileSync('notes.json').toString();
		return JSON.parse(data);
	} catch (e) {
		return [];
	}
}

module.exports = {
	getNotes,
	addNote,
	removeNote,
	listNotes,
	readNote
};