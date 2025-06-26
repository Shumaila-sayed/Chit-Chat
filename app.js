const express = require('express');
const app = express();
const router = express.Router();
const path = require('node:path');

// for html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

app.get('/', (req, res) => {
	res.render('index', { title: 'Chit Chat', messages: messages });
});

// for form
app.use(express.urlencoded({ extended: true }));

app.get('/new', (req, res) => {
	res.render('form');
});

// for route
app.use(router);

router.post('/new', (req, res) => {
	try {
		const { messageText, messageUser } = req.body;

		if (!messageText || !messageUser) {
			res.status(404).send('Message or User Not Found');
			return;
		}
		messages.push({
			text: messageText,
			user: messageUser,
			added: new Date(),
		});
		res.redirect('/');
	} catch (error) {
		console.log('Error getting message:', error);
		res.status(500).send('Internal Server Error');
	}
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`It's working on port ${PORT}!`);
});
