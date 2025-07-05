const db = require('../db/queries');

exports.getMessages = async (req, res) => {
	try {
		const messages = await db.getAllMessages();
		res.render('index', { title: 'Chit Chat', messages: messages });
	} catch (error) {
		console.error('Error fetching messages:', err);
		res.status(500).send('Error fetching messages');
	}
};

exports.newMessageGet = (req, res) => {
	res.render('form');
};

exports.newMessagePost = async (req, res) => {
	try {
		const { messageText, messageUser } = req.body;

		if (!messageText || !messageUser) {
			res.status(404).send('Message or User Not Found');
			return;
		}
		await db.insertMessages(messageText, messageUser);
		res.redirect('/');
	} catch (error) {
		console.log('Error getting message:', error);
		res.status(500).send('Internal Server Error');
	}
};

exports.messageDetailsGet = async (req, res) => {
	const id = parseInt(req.params.id);
	const message = await db.getMessageDetails(id);
	if (!message) {
		res.status(404).send('Message Not Found');
		return;
	}
	res.render('details', { message: message });
};
