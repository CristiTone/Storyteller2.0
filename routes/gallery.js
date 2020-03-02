const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Gallery route.'));

module.exports = router;
