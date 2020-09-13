const Sequelize = require('sequelize');

const db = require('../config/database');

const Review = db.define('review', {
	name: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
	},
	message: {
		type: Sequelize.STRING,
	},
});

module.exports = Review;
