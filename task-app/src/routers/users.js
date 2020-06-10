const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.post('/users', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/users', async (req, res) => {
	try {
		const users = await User.find({});
		res.status(201).send(users);

	} catch (e) {
		res.status(500).send(e);
	}
});

router.get('/users/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const user = await User.findById(_id);
		if (!user) return res.status(404).send();
		res.send(user);
	} catch (e) {
		if (e.name === 'CastError') return res.status(400).send({ reason: 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters.' });
		res.status(500).send(e);
	}
});

router.patch('/users/:id', async (req, res) => {
	const _id = req.params.id;
	const updates = Object.keys(req.body);
	try {
		// findByIdAndUpdate bypasses mongoose, which means that the mongoose middlewares wont be triggered
		const user = await User.findById(_id);
		updates.forEach((update) => user[update] = req.body[update]);
		await user.save();
		if (!user) return res.status(404).send();
		res.send(user);
	} catch (e) {
		if (e.name === 'CastError') return res.status(400).send({ reason: 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters.' });
		res.status(500).send(e);
	}
});

router.delete('/users/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const user = await User.findByIdAndDelete(_id);
		if (!user) return res.status(404).send();
		res.send(user);
	} catch (e) {
		if (e.name === 'CastError') return res.status(400).send({ reason: 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters.' });
		res.status(500).send(e);
	}
});

module.exports = router;