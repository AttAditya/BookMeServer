const express = require('express');
const moviesController = require('../controllers/movies.controller');
const moviesRouter = express.Router();

moviesRouter.get('/', moviesController.getMovies);
moviesRouter.post('/', moviesController.createMovie);

module.exports = moviesRouter;