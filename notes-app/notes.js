const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicates = notes.filter((note) => note.title === title);
	if (!duplicates.length) {
		notes.push({ title, body });
		saveNotes(notes);
	} else {
		console.log(chalk.bold.red.inverse('Note Already Exists!!'));
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
	addNote
};