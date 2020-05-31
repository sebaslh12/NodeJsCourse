const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=77585df14f7452b66fe0e255116b2bf7&query=${latitude},${longitude}`;
	request({ url, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to weather service', undefined);
		} else if (response.body.error) {
			callback('Unable to find location', undefined);
		} else {
			const data = response.body.current;
			const { temp, feelslike } = data;
			callback(undefined, `It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`);
		}
	});
}

module.exports = forecast;