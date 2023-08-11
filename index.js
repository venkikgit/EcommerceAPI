require('dotenv').config({ path: './.env' });
// express server
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
// adding body parser 
const bodyParser = require('body-parser');

var morgan = require('morgan')

// Port Number information
const port = process.env.PORT || 8000 ;


const path = require('path');
// Connecting to the DB
const db = require('./config/mongoose');
const session = require('express-session');
// passport strategy
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const MongoStore = require('connect-mongo');
app.use(morgan("dev"));
app.use(express.json());
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({
    name:'EcommerceAPI',
    // TODO change the secret before deployment in production 
    secret: 'blahsomething',
    saveUninitialized:false,  //Whenever there is a request that the session is not iniatilized i.e user is not logged in i.e identity is not established
    resave: false, //Identity is established and we don't need to rewrite the chnages
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb+srv://ecommerceAPI_1147:ElEBR3MFkednWtFX@cluster0.gvsfkpr.mongodb.net/?retryWrites=true&w=majority',
            autoRemove:'disabled'
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
        
}));
// passport configuration
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// use routes
app.use('/', require('./routes/products'));
// Server listening status
app.listen(port, function(err){
    if(err){
        // console.log('Errors', err);
        // interpolation of above statement
        console.log(`Error in running the server : ${err}`);
    }else{
        console.log(`Server is running on the port : ${port}`);
    }
});