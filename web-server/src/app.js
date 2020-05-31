const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
// The node main wrapper function provides __dirname and __filename values
const publicDirectory = path.join(__dirname, '../public');
const viewsDirectory = path.join(__dirname, '../templates/views');
const partialsDirectory = path.join(__dirname, '../templates/partials');

app.set('views', viewsDirectory);
app.set('view engine', 'hbs'); // Express template engine
hbs.registerPartials(partialsDirectory);

// Express static replaces the root route (if an index.html file exists)
app.use(express.static(publicDirectory));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather',
		name: 'Sebastian'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name: 'Sebastian'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		help: 'So you come to me?',
		title: 'Help',
		name: 'Sebastian'
	});
});

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It is raining',
		location: 'Colombia',
		name: 'Sebastian'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});