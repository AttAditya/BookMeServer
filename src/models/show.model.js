const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theatre',
        required: true
    },
    screen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen',
        required: true
    },
    time: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const showModel = mongoose.model('Show', showSchema);
module.exports = showModel;