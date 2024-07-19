const express = require('express');
const apiRouter = express.Router();

const authRouter = require('./auth.route');
const moviesRouter = require('./movies.route');
const showsRouter = require('./shows.route');
const screensRouter = require('./screens.route');
const theatresRouter = require('./theatres.route');

apiRouter.use('/auth', authRouter);
apiRouter.use('/movies', moviesRouter);
apiRouter.use('/shows', showsRouter);
apiRouter.use('/screens', screensRouter);
apiRouter.use('/theatres', theatresRouter);

module.exports = apiRouter;