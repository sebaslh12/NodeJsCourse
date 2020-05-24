const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=77585df14f7452b66fe0e255116b2bf7&query=37.8639,-122.4233';


request(url, (error, response) => {
	const data = JSON.parse(response.body);
	console.log(data.current);
});