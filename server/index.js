//import express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({ path: 'variable.env' });

//config express
const app = express();
app.engine('pug', require('pug').__express);

//enable PUG
app.set('view engine', 'pug');
// add views
app.set('views', path.join(__dirname, './views'));
//load static files
app.use(express.static('public'));

//validar entorno
const config = configs[app.get('env')];
app.locals.title = config.name;

//show current year
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	const getDate = new Date();
	res.locals.currentYear = getDate.getFullYear();
	res.locals.route = req.path;
	return next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
	console.log('server working');
});
