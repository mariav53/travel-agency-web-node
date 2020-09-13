const express = require('express');
const router = express.Router();

//controllers
const usController = require('../controllers/usController');
const homeController = require('../controllers/homeController');
const tripsController = require('../controllers/tripsController');
const reviewsController = require('../controllers/reviewsController');

module.exports = function () {
	router.get('/', homeController.homePageInfo);

	router.get('/us', usController.usInfo);

	router.get('/trips', tripsController.getTrips);

	router.get('/trips/:id', tripsController.getTrip);

	router.get('/reviews', reviewsController.getReviews);
	//when the fo rm is filled
	router.post('/reviews', reviewsController.postReview);

	return router;
};
