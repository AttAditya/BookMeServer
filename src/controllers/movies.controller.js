const movieModel = require('../models/movie.model');

async function createMovie(req, res) {
    let movie = req.body;

    if (!movie.title) {
        res.status(400);
        res.json({ message: 'Movie title is required' });
        return;
    }

    if (!movie.image) {
        res.status(400);
        res.json({ message: 'Movie image is required' });
        return;
    }

    if (!movie.rating) {
        res.status(400);
        res.json({ message: 'Movie rating is required' });
        return;
    }

    if (!movie.description) {
        res.status(400);
        res.json({ message: 'Movie description is required' });
        return;
    }

    try {
        movie = await movieModel.createMovie(movie);
        res.status(201);
        res.json(movie);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

async function getMovies(req, res) {
    try {
        const movies = await movieModel.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(500);
        res.json({ message: error.message });
    }
}

module.exports = {
    createMovie,
    getMovies
};