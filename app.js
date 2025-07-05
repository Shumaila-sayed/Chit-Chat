require('dotenv').config();
const express = require('express');
const app = express();
const path = require('node:path');
const newRouter = require('./routes/newRouters');

// for html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// for form
app.use(express.urlencoded({ extended: true }));

// for css - static assets
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// for route
app.get('/env-check', (req, res) => {
	res.json({
		PORT: process.env.PORT,
		DB_HOST: process.env.HOST,
		DB_USER: process.env.USER,
		DB_NAME: process.env.DATABASE,
		DB_PORT: process.env.PORT_DB || process.env.PORT, // explain port confusion
	});
});

app.use('/', newRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
	console.log(`It's working on port ${port}!`);
});
