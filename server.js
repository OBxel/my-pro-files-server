const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/dbconnection');

const homeRoutes = require('./routes/home');
const projectsRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Mes routes 
app.use('/', homeRoutes);
app.use('/my-pro-files', homeRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/contact', contactRoutes);

// Vérifier que le serveur est en marche 
app.get('/health', (req, res) => {
    res.status(200).send('Something broke!');
})

app.listen(PORT, () => {
    console.log(`Serveur ecoutant sur le port ${PORT}`);
});