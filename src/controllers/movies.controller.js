const movieModel = require('../models/movie.model');

async function createMovie(req, res) {
    let movie = req.body;

    if (!movie.title) {
        return res.status(400).send({ message: 'Movie title is required' });
    }

    if (!movie.image) {
        return res.status(400).send({ message: 'Movie image is required' });
    }

    if (!movie.rating) {
        return res.status(400).send({ message: 'Movie rating is required' });
    }

    if (!movie.description) {
        return res.status(400).send({ message: 'Movie description is required' });
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