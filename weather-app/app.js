const forecast = require('./utils/forecast.js');

forecast('37.8639', '-122.4233', (error, data) => {
	console.log(error);
	console.log(data);
});
