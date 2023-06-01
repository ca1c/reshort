const express = require('express');
const router = express.Router();

const createURL = require('./routes/createURL.js');
const redirect = require('./routes/redirect.js');

router.put('/createURL', createURL);

router.get('/:URLID', redirect);

module.exports = router;