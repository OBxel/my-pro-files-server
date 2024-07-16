require("dotenv").config();

const mongoose = require('mongoose');
const Project = require('../models/Project');

const projects = [
    {
        title: 'Project1',
        image: 'https://via.placeholder.com/150',
        description: 'Description du projet1',
        github: "https://github.com/projet1",
        site: "https://projet1.com"
    },
    {
        title: 'Project2',
        image: 'https://via.placeholder.com/150',
        description: 'Description du projet2',
        github: "https://github.com/projet2",
        site: "https://projet1.com"
    },
    {
        title: 'Project3',
        image: 'https://via.placeholder.com/150',
        description: 'Description du projet3',
        github: "https://github.com/projet3",
        site: "https://projet1.com"
    },
    {
        title: 'Project4',
        image: 'https://via.placeholder.com/150',
        description: 'Description du projet4',
        github: "https://github.com/projet4",
        site: "https://projet1.com"
    },
]

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    return Project.insertMany(projects)
}).then(() => {
    console.log('Projects added successfully');
    mongoose.connection.close();
}).catch(err => {
    console.error('Error adding projetcs: ', err);
    mongoose.connection.close();
});