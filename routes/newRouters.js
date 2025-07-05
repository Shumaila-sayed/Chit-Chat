const { Router } = require('express');
const newRouter = Router();
const newController = require('../controllers/newControllers');

newRouter.get('/', newController.getMessages);

newRouter.get('/new', newController.newMessageGet);
newRouter.post('/new', newController.newMessagePost);

newRouter.get('/details/:id', newController.messageDetailsGet);

module.exports = newRouter;