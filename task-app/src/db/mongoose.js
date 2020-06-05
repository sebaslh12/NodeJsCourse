const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager';

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const User = mongoose.model('User', {
	name: {
		type: String
	}, age: {
		type: Number
	},
});

const me = User({ name: 'Sebastian', age: 25 });

me.save().then(() => {
	console.log(me)
}).catch((error) => {
	console.log('Error', error);
})