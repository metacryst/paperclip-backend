const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

router.get('/', (req, res) => {
	Category.find().then((categories) => {
		res.json(categories);
	});
});

router.get('/:categoryName', (req, res) => {
	Category.findOne({ title: req.params.categoryName }).then((categories) => {
		res.json(categories);
	});
});

module.exports = router;
