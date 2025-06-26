const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter")
const path = require("node:path");

// for html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// for routes
app.use("/new", newMessageRouter);
app.use("/", indexRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`It's working on port ${PORT}!`);
})