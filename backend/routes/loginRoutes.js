//create login routes
const express = require('express');
const router = express.Router();
const loginMiddleware = require('../middleware/loginMiddleware');
//create login route
router.post('/login', loginMiddleware);
module.exports = router;