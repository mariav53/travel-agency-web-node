const Trip = require('../models/Trips');

exports.getTrips = async (req, res) => {
	//get all trips from db
	const trips = await Trip.findAll();
	res.render('trips', {
		page: 'Upcoming Trips',
		trips,
	});
};

exports.getTrip = async (req, res) => {
	//get specific trip by its id
	const trip = await Trip.findByPk(req.params.id);
	res.render('trip', {
		trip,
	});
};
