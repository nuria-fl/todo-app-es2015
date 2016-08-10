import express from 'express';
import bodyParser from 'body-parser';
import jade from 'jade';
// import middleware from './middleware';
import api from './api';
import config from './config.json';

let PORT = process.env.PORT || 3000;

let app = express();

app.locals.moment = require('moment');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// internal middleware
// app.use(middleware({ config, db }));

// api router
app.use('/', api());

app.listen(PORT, function() {
	console.log("Listening on port " + PORT)
});

export default app;