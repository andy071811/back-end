const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    dateStarted: String,
    dateEnded: String,
    summary: String,
    responsibilities: Array
});

const WorkExperience = mongoose.model("work experience", workExperienceSchema);

module.exports = WorkExperience;