const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;