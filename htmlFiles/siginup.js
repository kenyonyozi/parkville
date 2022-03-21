const mongoose = require('mongoose');
const signupSchema = mongoose.Schema({
    firstname:{
        type:'String',
        required:true
    },
    lastname:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required:true
    },
    password:{
        type:'String',
        required:true
    },
    confirmpassword:{
        type:'String',
        required:true
    }
});

// exporting the schema 
const Signup = module.exports = mongoose.model('Signup',signupSchema);