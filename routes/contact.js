const express = require('express');
const router = express.Router();

// CONTACT
router.get('/', (req, res) => {
    res.send('Page de contact');
});

module.exports = router;