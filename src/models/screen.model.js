const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theatre',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    seatData: {
        type: String,
        required: true
    }
}, { timestamps: true });

const screenModel = mongoose.model('Screen', screenSchema);
module.exports = screenModel;