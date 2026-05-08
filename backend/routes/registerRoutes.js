//create routes from register model
const express = require('express');
const router = express.Router();
const registerModel = require('../models/registerModel');
//create route
router.post('/register',registerModel);
module.exports = router;
