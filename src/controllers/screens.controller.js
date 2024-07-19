const screenModel = require('../models/screen.model');

async function createScreen(req, res) {
    let screen = req.body;

    if (!screen.theatre) {
        res.status(400);
        res.json({ message: 'Theatre is required' });
        return;
    }

    if (!screen.name) {
        res.status(400);
        res.json({ message: 'Screen name is required' });
        return;
    }

    if (!screen.seatData) {
        res.status(400);
        res.json({ message: 'Seat data is required' });
        return;
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