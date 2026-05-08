//create register controller
const express = require('express');
const registerModel = require('../models/registerModel');
//create controller
const registerController = (req,res)=>{
    registerModel(req,res);
}
module.exports = registerController;    
