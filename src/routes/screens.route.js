const express = require('express');
const screensController = require('../controllers/screens.controller');
const screensRouter = express.Router();

screensRouter.get('/', screensController.getScreens);
screensRouter.post('/', screensController.createScreen);

module.exports = screensRouter;