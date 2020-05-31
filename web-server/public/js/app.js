const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const location = event.target.location.value;
	fetch(`http://localhost:3000/weather?address=${location}`).then(async (response) => {
		const data = await response.json();
		if (data.error) console.log(data.error);
		else console.log(data.location, data.forecast);
	});
})