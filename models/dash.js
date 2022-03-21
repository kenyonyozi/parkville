const mongoose = require('mongoose');
const dashSchema = mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    phonenumber:{
        type: String,
        required:true
    },
    ninnumber:{
        type: String,
        required:true
    },
    numberplate:{
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
    color:{
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
    description:{
        type: String,
        required:true
    },
    duration:{
        type: String,
        required:true
    },
    paidprice:{
        type: String,
        required:true
    },
    batteryprice:{
        type: String,
        required:true
    },
    receipt:{
        type: String,
        required:true
    }
});

// exporting the schema 
const Dash = module.exports = mongoose.model('Dash',dashSchema);