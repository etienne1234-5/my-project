//register user to db by using email and password and fullname
const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../config/db'); 
//create model that insert data and encrypted password
const registerModel = (req,res)=>{
    const {email,password,fullname} = req.body;
    //check if email already exists
    connection.query('SELECT * FROM users WHERE email = ?',[email],(err,result)=>{
        if(err){
            console.log('Error checking email',err);
            res.status(500).json({message:'Error checking email'});
            return;
        }
        if(result.length > 0){
            res.status(400).json({message:'Email already exists'});
            return;
        }
        //hash password
        bcrypt.hash(password,10,(err,hash)=>{
            if(err){
                console.log('Error hashing password',err);
                res.status(500).json({message:'Error hashing password'});
                return;
            }
            //insert data to db
            connection.query('INSERT INTO users (email,password,fullname) VALUES (?,?,?)',[email,hash,fullname],(err,result)=>{
                if(err){
                    console.log('Error inserting data',err);
                    res.status(500).json({message:'Error inserting data'});
                    return;
                }
                res.status(200).json({message:'User registered successfully'});
            });
        });
    }
    );
}
module.exports = registerModel;


