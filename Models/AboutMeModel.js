const mongoose = require('mongoose');

const aboutMeSchema = new mongoose.Schema({
    skills: Array,
    summary: String
});

const AboutMe = mongoose.model("about me", aboutMeSchema);

module.exports = AboutMe;