const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/task-manager';

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

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