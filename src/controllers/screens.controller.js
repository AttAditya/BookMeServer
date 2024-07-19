const screenModel = require('../models/screen.model');

async function createScreen(req, res) {
    let screen = req.body;

    if (!screen.theatre) {
        return res.status(400).send({ message: 'Theatre is required' });
    }

    if (!screen.name) {
        return res.status(400).send({ message: 'Screen name is required' });
    }

    if (!screen.seatData) {
        return res.status(400).send({ message: 'Seat data is required' });
    }

    try {
        screen = await screenModel.createScreen(screen);
        res.status(201);
        res.json(screen);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

async function getScreens(req, res) {
    try {
        const screens = await screenModel.getScreens();
        res.json(screens);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

module.exports = {
    createScreen,
    getScreens
};