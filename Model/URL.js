const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    URLID: { type: String, required: true },
    redirectURL: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

const URL = mongoose.model('URL', URLSchema);

module.exports = URL;