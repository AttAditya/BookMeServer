const showModel = require('../models/show.model');

async function createShow(req, res) {
    let show = req.body;

    if (!show.movie) {
        res.status(400);
        res.json({ message: 'Movie is required' });
        return;
    }

    if (!show.theatre) {
        res.status(400);
        res.json({ message: 'Theatre is required' });
        return;
    }

    if (!show.screen) {
        res.status(400);
        res.json({ message: 'Screen is required' });
        return;
    }

    if (!show.time) {
        res.status(400);
        res.json({ message: 'Time is required' });
        return;
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