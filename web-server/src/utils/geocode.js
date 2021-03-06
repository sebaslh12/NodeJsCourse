const request = require('request')

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=put_your_token_here`;

	request({ url, json: true }, (error, { body }) => {
		console.log(error, body);
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (!body.features || !body.features.length  || body.message) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			});
		}
	});
}

module.exports = geocode;