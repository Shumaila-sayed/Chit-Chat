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
app.use('/', newRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`It's working on port ${port}!`);
});
