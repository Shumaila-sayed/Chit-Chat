const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter")
const path = require("node:path");

// for html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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
	res.render('index', {title: "Chit Chat", messages: messages});
});

// for routes
app.use("/new", newMessageRouter);
app.use("/", indexRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`It's working on port ${PORT}!`);
})