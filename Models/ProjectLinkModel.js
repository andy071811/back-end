const mongoose = require('mongoose');

const projectLinkSchema = new mongoose.Schema({
    title: String,
    link: String
});

const ProjectLink = mongoose.model("project link", projectLinkSchema);

module.exports = ProjectLink;