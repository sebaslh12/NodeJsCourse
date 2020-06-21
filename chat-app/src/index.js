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

io.on('connection', (socket) => {
	console.log('Welcome');

	socket.emit('message', 'Welcome');
	socket.broadcast.emit('message', 'New foe has appeared!'); // Broadcast to everybody but the one who send the socket

	socket.on('sendMessage', (message) => {
		io.emit('message', message); // Broadcast to everyone connected
	});

	socket.on('disconnect', () => {
		io.emit('message', 'A foe has withdrawn!')
	})
})

server.listen(port, () => {
	console.log(`Server is up on: ${port}`);
});