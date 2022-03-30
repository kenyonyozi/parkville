const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator= require('express-validator');
const mongoose = require('mongoose');

router.use(expressValidator());
// requring the schema of dash from the model
const Client = require('../models/Client')

// handling routes of dash
// router.get('/dash',(req,res)=>{
//     // give me the dash board at this route and res with dash
//     res.render('dash')
// });

//handles fetching client data from the db to populate the table
router.get('/dash', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Client.find({});
        console.log('>>>>>> all clients',data);
        // gives us the file dash and come with the client data or client has same info with data
        res.render('dash', {clients : data})
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all clients',
            error
          });
    }
});

// handling routes of dash for post to access reg form on route /dash
// post from frontend using the dash route to backend 
router.post('/dash',(req,res)=>{
    // declaring the variables in the pug file name
    // we are requesting node js to foward the data and the body with the name given only uses name
    const firstname = req.body.firstname;
    const phonenumber = req.body.phonenumber;
    const ninnumber = req.body.ninnumber;
    const numberplate= req.body.numberplate;
    const model= req.body.model;
    const date= req.body.date;
    const time= req.body.time;
    const color= req.body. color;
    const gender= req.body. gender;
    const service= req.body.service;
    const description= req.body.description;
    const duration= req.body.duration;
    const paidprice= req.body.paidprice;
    const batteryprice= req.body.batteryprice;
    const receipt= req.body.receipt;
   
    // handling errors
    // incase there is an error we serve back the form
    const errors = req.validationErrors();
    console.log();
    if (errors) {
        res.render('/dash')
    }
    else{
        // new variable asssigin it 
        // value(property name from schema):property(varible name in route)
        let newClient = new Client({
            firstname:firstname,
            phonenumber:phonenumber,
            ninnumber: ninnumber,
            numberplate: numberplate,
            model:model,
            date: date,
            time:time,
            color: color,
            gender: gender,
            service:service,
            description:description,
            duration:duration,
            paidprice:paidprice,
            batteryprice:batteryprice,
            receipt:receipt,
        });
        // saving the data
        // case of error return err incase no error give message in console and give dash 
        // controllers
        newClient.save((err) =>{

            if(err){
                console.error(err);
                return;
            }
            else{
                // we first flash a message confirm save in data base
                // go to dashboard since user signed up
                console.log('data saved in database', );
                res.redirect('/dash')
            }
        })
    }
});
module.exports = router;
// exporting the router