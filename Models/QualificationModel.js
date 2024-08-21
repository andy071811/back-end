const mongoose = require('mongoose');

const qualificationSchema = new mongoose.Schema({
    name: String,
    dateAcquired: String,
    type: String
});

const Qualification = mongoose.model("qualification", qualificationSchema);

module.exports = Qualification;