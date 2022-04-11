const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator= require('express-validator');
const mongoose = require('mongoose');

const Signoff = require('../models/Signoff')
// handling routes of home
// router.get('/signoff',(req,res)=>{
//     res.render('signoff')
// });


//handles fetching client data from the db to populate the table
router.get('/signoff', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Signoff.find({}).sort({$natural:-1});
        console.log('>>>>>> all clients',data);
        // gives us the file dash and come with the client data or client has same info with data
        res.render('signoff', {signoffs : data})
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
router.post('/signoff',(req,res)=>{
    // declaring the variables in the pug file name
    // we are requesting node js to foward the data and the body with the name given only uses name
    const name = req.body.name;
    const recieptnumber = req.body.recieptnumber;
    const phonenumber = req.body.phonenumber;
    const ninnumber = req.body.ninnumber;
    const model= req.body.model;
    const date= req.body.date;
    const time= req.body.time;
    const gender= req.body. gender;
    const service= req.body. service;

    
    // handling errors
    // incase there is an error we serve back the form
    const errors = req.validationErrors();
    console.log();
    if (errors) {
        res.render('/signoff')
    }
    else{
        // new variable asssigin it 
        // value(property name from schema):property(varible name in route)
        let newSignoff = new Signoff({
            name:name,
            recieptnumber:recieptnumber,
            phonenumber:phonenumber,
            ninnumber: ninnumber,
            model:model,
            date: date,
            time:time,
            gender: gender,
            service: service,
        });
        // saving the data
        // case of error return err incase no error give message in console and give dash 
        // controllers
        newSignoff.save((err) =>{

            if(err){
                console.error(err);
                return;
            }
            else{
                // we first flash a message confirm save in data base
                // go to dashboard since user signed up
                console.log('data saved in database', );
                res.redirect('/signoff')
            }
        })
    }
});

// delete user
router.get('/deleteuser/:id',async (req,res)=>{
    try {
        // console.log('client')
        await Signoff.deleteOne({_id:req.params.id})
        res.redirect('back')
    } catch (error) {
        res.status(400).send('unable to delete user')
    }
});

module.exports = router;
// exporting the router