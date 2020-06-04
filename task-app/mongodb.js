const mongodb = require("mongodb");
const connectionURL = 'mongodb://127.0.0.1:27017';
const MongoClient = mongodb.MongoClient
const database = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) return console.log('Unable to connect');
	const db = client.db(database);
	/* db.collection('users').insertOne({
		name: 'Sebastian',
		age: '25'
	}, (error, result) => {
		if (error) return console.log('Unable to insert user');
		console.log(result.ops);
	}); */

	/* db.collection('users').insertMany([{
		name: 'Jen',
		age: 28
	}, {
		name: 'Gunther',
		age: 22
	}], (error, result) => {
		if (error) return console.log('Unable to insert user');
		console.log(result.ops);
	}) */

	db.collection('tasks').insertMany([{
		description: 'Finish the course',
		completed: false
	}, {
		description: 'Finish the book',
		completed: false
	}, {
		description: 'Complete the challenge',
		completed: true
	}], (error, result) => {
		if (error) return console.log('Unable to insert user');
		console.log(result.ops);
	})
});