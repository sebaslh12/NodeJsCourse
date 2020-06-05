const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) return console.log('Unable to connect');
	const db = client.db(database);
	db.collection('users').findOne({ name: 'Sebastian' }, (error, user) => {
		if(error) return console.log('Unable to fetch');
		console.log(user)
	});

	db.collection('users').find({ name: 'Sebastian' }).toArray((error, users) => {
		console.log(users);
	})
});