const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: {type: String, required: true},
    description: { type: String, required: true },
    github: { type: String, required: true },
    site: { type: String, required: true }
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;