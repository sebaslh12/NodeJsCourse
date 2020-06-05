const mongoose = require('mongoose');
const validator = require('validator');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager';

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const User = mongoose.model('User', {
	name: {
		type: String,
		trim: true,
		require: true
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number')
			}
		}
	},
	email: {
		type: String,
		require: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email address is invalid');
			}
		}
	}
});

const me = User({ name: 'Spaceee       ', email: '  a@a.com  ' });

me.save().then(() => {
	console.log(me)
}).catch((error) => {
	console.log('Error', error);
})

const Task = mongoose.model('Task', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
});

/* const task = Task({ description: 'finish model', completed: true });

task.save().then(() => {
	console.log(task)
}).catch((error) => {
	console.log('Error', error);
}) */