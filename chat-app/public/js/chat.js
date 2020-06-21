const url = 'http://localhost:3000';
const socket = io(url);

socket.on('countUpdated', (data) => {
	console.log('io count is ', data)
});

document.querySelector('#increment').addEventListener('click', (event) => {
	event.preventDefault();
	socket.emit('incrementCount')
})