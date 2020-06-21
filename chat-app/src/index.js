const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

let count = 0;

io.on('connection', (socket) => {
	console.log('New foe has appeared');
	socket.emit('countUpdated', count);
	socket.on('incrementCount', () => {
		count++;
		io.emit('countUpdated', count); // this broadcasts the event to all the connections
	})
})

server.listen(port, () => {
	console.log(`Server is up on: ${port}`);
});