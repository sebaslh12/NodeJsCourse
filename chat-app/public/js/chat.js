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
});

document.querySelector('#send-location').addEventListener('click', (event) => {
	event.preventDefault();
	if (!navigator.geolocation) return alert('Your browser does not support Geolocation');

	navigator.geolocation.getCurrentPosition((position) => {
		socket.emit('sendLocation', { latitude: position.coords.latitude, longitude: position.coords.longitude });
	});
});