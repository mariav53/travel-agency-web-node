const Review = require('../models/Reviews');

exports.getReviews = async (req, res) => {
	const reviews = await Review.findAll();
	res.render('reviews', {
		page: 'Reviews',
		reviews,
	});
};

exports.postReview = async (req, res) => {
	//validate form fields
	let { name, email, message } = req.body;

	let errors = [];
	if (!name) {
		errors.push({ msg: 'Add your name' });
	}
	if (!email) {
		errors.push({ msg: 'Add your email' });
	}
	if (!message) {
		errors.push({ msg: 'Add your message' });
	}

	if (errors.length > 0) {
		//show errors
		const reviews = await reviews.findAll();
		res.render('reviews', {
			errors,
			name,
			email,
			message,
			page: 'Reviews',
			reviews,
		});
	} else {
		//add to db
		const review = await Review.create({
			name,
			email,
			message,
		});
		res.redirect('/reviews');
	}
};
