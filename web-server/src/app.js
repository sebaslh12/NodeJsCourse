const path = require('path');
const express = require('express');

const app = express();
// The node main wrapper function provides __dirname and __filename values
const publicDirectory = path.join(__dirname, '../public');

// Express static replaces the root route
app.use(express.static(publicDirectory));

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It is raining',
		location: 'Colombia'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});