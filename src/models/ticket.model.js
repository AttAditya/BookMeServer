const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    show: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Show',
        required: true
    },
    seat: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ticketModel = mongoose.model('Ticket', ticketSchema);
module.exports = ticketModel;