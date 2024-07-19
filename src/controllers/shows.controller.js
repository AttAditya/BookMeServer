const showModel = require('../models/show.model');

async function createShow(req, res) {
    let show = req.body;

    if (!show.movie) {
        return res.status(400).send({ message: 'Movie is required' });
    }

    if (!show.theatre) {
        return res.status(400).send({ message: 'Theatre is required' });
    }

    if (!show.screen) {
        return res.status(400).send({ message: 'Screen is required' });
    }

    if (!show.startTime) {
        return res.status(400).send({ message: 'Start time is required' });
    }

    if (!show.endTime) {
        return res.status(400).send({ message: 'End time is required' });
    }

    try {
        show = await showModel.createShow(show);
        res.status(201);
        res.json(show);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

async function getShows(req, res) {
    try {
        const shows = await showModel.getShows();
        res.json(shows);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

module.exports = {
    createShow,
    getShows
};