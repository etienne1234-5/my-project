//import dotenv
require('dotenv').config();
const express = require('express');
const nodemon = require('nodemon');
const cors =require('cors');
const path = require('path');
const app = express();
 const port = process.env.PORT||7000;
//import database connection
const connection = require('./config/db');


 app.use(express.json());
app.use(cors());
//specialize full path to connect server to frontend
app.use(express.static(path.join(__dirname,'../frontend/megas/dist')));
//import register route
const registerRoutes = require('./routes/registerRoutes');  
//use routes
app.use('/api', registerRoutes);



app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}`);
});
    
 