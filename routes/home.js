const express = require('express');
const router = express.Router();

// ACCUEIL

router.get('/', (req, res) => {
    res.send("Serveur React direction Home");
});

router.get('/my-pro-files', (req, res) => {
    res.send('Serveur React en redirection sur le Home')
})

module.exports = router;