const url = 'http://localhost:3000';
const socket = io(url);

// Elements
const form = document.querySelector('#chat');
const locationButton = document.querySelector('#send-location');
const messages = document.querySelector('#messages');
// Template
const messageTemplate = document.querySelector('#message-template').innerHTML;

socket.on('message', (message) => {
	const html = Mustache.render(messageTemplate,  { message })
	messages.insertAdjacentHTML('afterbegin', html)
});


form.addEventListener('submit', (event) => {
	event.preventDefault();
	const message = event.target.message.value.trim();
	if (message) {
		socket.emit('sendMessage', message, () => console.log('Message received')); // after the object it comes the event acknowledgement function
		event.target.message.value = '';
	}
});

locationButton.addEventListener('click', (event) => {
	event.preventDefault();
	if (!navigator.geolocation) return alert('Your browser does not support Geolocation');

	navigator.geolocation.getCurrentPosition((position) => {
		socket.emit('sendLocation', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude
		}, () => console.log('Location shared'));
	});
});