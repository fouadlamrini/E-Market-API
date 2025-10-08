const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('Server is working!');
});

module.exports = router;