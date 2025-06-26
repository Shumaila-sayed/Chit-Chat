const express = require("express");
const app = express();
const path = require("node:path");

// for html
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.send("hello World!"));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`It's working on port ${PORT}!`);
})