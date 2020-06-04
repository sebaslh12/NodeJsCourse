const mongodb = require("mongodb");
const connectionURL = 'mongodb://127.0.0.1:27017';
const MongoClient = mongodb.MongoClient
const database = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) return console.log('Unable to connect');
	const db = client.db(database);
	db.collection('users').insertOne({
		name:'Sebastian',
		age: '25'
	});
});