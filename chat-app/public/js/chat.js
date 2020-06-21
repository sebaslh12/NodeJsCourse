const url = 'http://localhost:3000';
const socket = io(url);

socket.on('message', (message) => {
	console.log(message);
});

document.querySelector('#chat').addEventListener('submit', (event) => {
	event.preventDefault();
	const message = event.target.message.value.trim();
	if (message) {
		socket.emit('sendMessage', message);
		event.target.message.value = '';
	}
})