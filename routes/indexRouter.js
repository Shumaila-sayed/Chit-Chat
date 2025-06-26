const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("hey its the index"))



module.exports = indexRouter;
