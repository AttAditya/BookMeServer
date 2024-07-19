const theatreModel = require('../models/theatre.model');

async function createTheatre(req, res) {
    let theatre = req.body;

    if (!theatre.name) {
        res.status(400);
        res.json({ message: 'Theatre name is required' });
        return;
    }

    if (!theatre.location) {
        res.status(400);
        res.json({ message: 'Theatre location is required' });
        return;
    }

    if (!theatre.screens) {
        res.status(400);
        res.json({ message: 'Number of screens is required' });
        return;
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