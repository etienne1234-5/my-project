//create connection to db
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config({path:'../.env'});

//create connection
const connection = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,  
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});
//error handling
connection.connect((err)=>{
    if(err){
        console.log('Error connecting to database',err);
        return;
    }
    console.log('Connected to database');
});

module.exports = connection;