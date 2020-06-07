const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.post('/tasks', async (req, res) => {
	const task = new Task(req.body);
	try {
		await task.save();
		res.status(201).send(task);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/tasks', async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(201).send(tasks);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get('/tasks/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const task = await Task.findById(_id);
		if (!task) return res.status(404).send();
		res.send(task);
	} catch (e) {
		if (e.name === 'CastError') return res.status(400).send({ reason: 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters.' });
		res.status(500).send(e);
	}
});

router.patch('/tasks/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
		if (!task) return res.status(404).send();
		res.send(task);
	} catch (e) {
		if (e.name === 'CastError') return res.status(400).send({ reason: 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters.' });
		res.status(500).send(e);
	}
});

router.delete('/tasks/:id', async (req, res) => {
	const _id = req.params.id;
	try {
		const task = await Task.findByIdAndDelete(_id, req.body);
		if (!task) return res.status(404).send();
		res.send(task);
	} catch (e) {
		if (e.name === 'CastError') return res.status(400).send({ reason: 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters.' });
		res.status(500).send(e);
	}
});

module.exports = router;