const Trip = require('../models/Trips');
const Review = require('../models/Reviews');

exports.homePageInfo = async (req, res) => {
	const trips = await Trip.findAll({ limit: 3 });
	const reviews = await Review.findAll({ limit: 3 });
	res.render('index', {
		clase: 'home',
		trips,
		reviews,
	});
};
