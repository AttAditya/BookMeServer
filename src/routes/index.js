const express = require('express');
const apiRouter = express.Router();

const moviesRouter = require('./movies.route');
const showsRouter = require('./shows.route');
const screensRouter = require('./screens.route');
const theatresRouter = require('./theatres.route');

apiRouter.use('/movies', moviesRouter);
apiRouter.use('/shows', showsRouter);
apiRouter.use('/screens', screensRouter);
apiRouter.use('/theatres', theatresRouter);

module.exports = apiRouter;