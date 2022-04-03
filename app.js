// require the packages we are going to use 
const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const cors = require('cors')
const expressValidator = require('express-validator');
// the port app will run on
// const port = process.env.port || 4000;
const User = require('./models/User');
// when you leave a feild you it should not be save a detetail
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });
  
// impoting routes
// importing the databases configuration
const config = require('./config/database');
// calling the login in route
const loginRoutes = require('./routes/loginRoutes');
// calling the home page route
const homeRoutes = require('./routes/homeRoutes');
// calling the dash page
const dashRoutes = require('./routes/dashRoutes');
// calling the signup
const signupRoutes = require('./routes/signupRoutes');
// calling the form route in sign up the post route is going yp be in the same file as signup
// const signupRoutes = require('./routes/signupRoutes');

// calling the sign off route
const signoffRoutes = require('./routes/signoffRoutes');



// instasting app to get express method
const app = express();

//we are creating a conection to mongo database from from config file in the controller(app.js)
// connect is a method of mongo
mongoose.connect(config.database);
const db = mongoose.connection;
// if ok console log message
db.once('open',()=>{
    console.log('connected to mongodb')
});
// telling the console if theres an error
db.on('error',(err)=>{
    console.log(ErrorEvent)
});
 
// telling the app we are using view engine
// setting up the engine 
// must be used during pug
app.engine('pug', require('pug').__express); 
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));

// MIDDLEWARE
// bodypaser middleware section
// extended means when node uses body parser get the forms the way they are and focus on input fields
app.use(bodyParser.urlencoded({extended:false}));
// telling bodyparser to use json formate when exposing the fields
app.use(bodyParser.json());
app.use(expressSession);

// respon for email and password were captured
// intialize is a method that helps us capture 
app.use(passport.initialize());
app.use(passport.session());
// it helps log into the syetem
app.use(cors());

// after getting the usser is ging to be compared
app.get('*',(req,res,next)=>{
    res.locals.user = req.user || null;
    next();
});

passport.use(User.createStrategy());
// inbuilt method
// when i log into system a serial no is given to me so thesystem is knows id
passport.serializeUser(User.serializeUser());
// forgetting the serial no when log out happens 
passport.deserializeUser(User.deserializeUser());


// validator middle ware
// app.use(expressValidator({
//     errorFormatter:(param,msg,value) =>{
//         var namespace = param.split('.');
//         var root = namespace.shift();
//         const formParam = root

//         while(namespace.length()){
//             formParam += '[' + namespace.shift() + ']'
//         }

//         return{
//             param : formParam,
//             msg : msg,
//             value : value
//         }
//     }
// }));



// setting directory for static files
// directorate for static folders in public so its needed for all files 
// find all my static files in public these include css images etc
app.use(express.static(path.join(__dirname,"public")));


// use imported routes
// middleware
// when we import routes we give a variable for the login route
app.use('/',loginRoutes);
app.use('/',homeRoutes);
app.use('/',dashRoutes);
// the sign up route is handling get n post methods
app.use('/',signupRoutes);
// post sign up tp call the post method of the form the action specified in the form attribute
// same varible for signup routs to call the form
app.use('/',signoffRoutes);

// For invalid routes as in if someone hits a non existent route.
//This should always be the last route after all other routes are excecuted.
//the message that appears in case someone searches for a route that doesnt exist on my server
app.get('*', (req, res) => {
    res.status(404).send('no such page')
  })
  

app.listen(3000,()=>{
    console.log('server is listening at port 3000');
});





