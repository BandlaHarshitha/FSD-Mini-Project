// server/routes/protected.js
const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/role');

// Example of an admin-only route
router.get('/admin', checkRole(['admin']), (req, res) => {
    res.json({ msg: 'Welcome, Admin!' });
});

module.exports = router;
