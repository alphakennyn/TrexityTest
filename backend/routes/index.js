const express = require('express');
const helloRoute = require('./hello');

const router = express.Router();

router.get('/hello', helloRoute);

module.exports = router;