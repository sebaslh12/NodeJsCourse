
fetch('http://localhost:3000/weather?address=Boston').then(async (response) => {
	const data = await response.json();
	if (data.error) console.log(data.error);
	else console.log(data.location, data.forecast);
});