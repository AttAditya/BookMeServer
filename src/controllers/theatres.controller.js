const theatreModel = require('../models/theatre.model');

async function createTheatre(req, res) {
    let theatre = req.body;

    if (!theatre.name) {
        return res.status(400).send({ message: 'Theatre name is required' });
    }

    if (!theatre.location) {
        return res.status(400).send({ message: 'Theatre location is required' });
    }

    if (!theatre.screens) {
        return res.status(400).send({ message: 'Number of screens is required' });
    }

    try {
        theatre = await theatreModel.createTheatre;
        res.status(201);
        res.json(theatre);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

async function getTheatres(req, res) {
    try {
        const theatres = await theatreModel.getTheatres();
        res.json(theatres);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

module.exports = {
    createTheatre,
    getTheatres
};