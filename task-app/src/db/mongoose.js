const mongoose = require('mongoose');
const validator = require('validator');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager';

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const User = mongoose.model('User', {
	name: {
		type: String,
		trim: true,
		required: true
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
	password: {
		type: String,
		minlength: 7,
		trim: true,
		required: true,
		validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error('Invalid password');
			}
		}
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email address is invalid');
			}
		}
	}
});

/* const me = User({ name: 'Nameeee ', email: '  a@a.com  ', password:'123456   ' });

me.save().then(() => {
	console.log(me)
}).catch((error) => {
	console.log('Error', error);
}) */

const Task = mongoose.model('Task', {
	description: {
		type: String,
		required: true,
		trim: true
	},
	completed: {
		default: false,
		type: Boolean
	}
});

const task = Task({ description: 'Not passing completed' });

task.save().then(() => {
	console.log(task)
}).catch((error) => {
	console.log('Error', error);
})