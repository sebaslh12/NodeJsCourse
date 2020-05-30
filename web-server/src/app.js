const express = require('express');

const app = express();

app.get('', (req, res) => {
	res.send('Hello World');
});

app.get('/help', (req, res) => {
	res.send('This is the help page');
});

app.get('/about', (req, res) => {
	res.send('This is a test server');
});

app.get('/weather', (req, res) => {
	res.send('This is the weather page');
});

app.listen(3000, ()=>{
	console.log('Server is up on port 3000.');
});