const mongoose = require('mongoose');
const signoffSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    recieptnumber:{
        type: String,
        required:true
    },
    ninnumber:{
        type: String,
        required:true
    },
    phonenumber:{
        type: String,
        required:true
    },
    model:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    time:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    service:{
        type: String,
        required:true
    },
});

// exporting the schema 
const Signoff = module.exports = mongoose.model('Signoff', signoffSchema);