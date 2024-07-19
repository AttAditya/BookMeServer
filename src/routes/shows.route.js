const express = require('express');
const showsController = require('../controllers/shows.controller');
const showsRouter = express.Router();

showsRouter.get('/', showsController.getShows);
showsRouter.post('/', showsController.createShow);

module.exports = showsRouter;