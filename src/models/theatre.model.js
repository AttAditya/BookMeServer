const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    screens: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const theatreModel = mongoose.model('Theatre', theatreSchema);
module.exports = theatreModel;