const weatherForm = document.querySelector('form');
const loading = document.getElementById('loading');
const forecast = document.getElementById('forecast');

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const location = event.target.location.value;
	loading.textContent = 'Loading...';
	forecast.textContent = '';
	fetch(`http://localhost:3000/weather?address=${location}`).then(async (response) => {
		loading.textContent = '';
		const data = await response.json();
		if (data.error) forecast.textContent = data.error;
		else forecast.textContent = `${data.location}. ${data.forecast}`;
	});
})