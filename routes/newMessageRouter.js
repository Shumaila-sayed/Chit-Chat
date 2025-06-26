const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => res.send('hey its the new Message'));


module.exports = newMessageRouter;