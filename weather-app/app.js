const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=77585df14f7452b66fe0e255116b2bf7&query=37.8639,-122.4233';


request({url, json: true}, (error, response) => {
	const data = response.body.current;
	const temp = data.temperature;
	const feelslike = data.feelslike;
	console.log(`It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`);
});