const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const expressValidator= require('express-validator');

router.use(expressValidator());
// requring the schema of signup
const Signup = require('../models/signup')

// handling routes of signup for get
router.get('/signup',(req,res)=>{
    res.render('signup')
});

// handling routes of signup for post to access sign up
router.post('/signup',(req,res)=>{
    // declaring the variables in the pug file name
    // we are requesting node js to foward the data and the body with the name given 
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    // validation(OPTIONAL)
    // req.checkBody('firstname','firstname is required').notEmpty();
    // req.checkBody('lastname','lastname is required').notEmpty();
    // req.checkBody('email','email is required').notEmpty();
    // req.checkBody('password','password is required').notEmpty();
    // req.checkBody('confirmpassword','confirmpassword is required').notEmpty();

    // handling errors
    // incase there is an error we serve back the form
    const errors = req.validationErrors();
    if (errors) {
        res.render('signup')
    }
    // if no error
    else{
        // new variable asssigin it 
        // value(property name from schema):property(varible name in route)
        let newSignup = new Signup({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
            confirmpassword:confirmpassword
        });
        // saving the data
        // case of error return err incase not error give message in console and give dash page
        newSignup.save((err) =>{

            if(err){
                console.error(err);
                return;
            }
            else{
                // we first flash a message comfirm save in data base
                // go to dashboard since user signed up
                console.log('data saved in data base');
                res.redirect('/dash')
            }
        })
    }
   
});
module.exports = router;
// exporting the router to any file that will require it 