const express = require('express');
const theatreController = require('../controllers/theatres.controller');
const theatresRouter = express.Router();

theatresRouter.get('/', theatreController.getTheatres);
theatresRouter.post('/', theatreController.createTheatre);

module.exports = theatresRouter;