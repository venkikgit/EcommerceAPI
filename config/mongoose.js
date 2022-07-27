const dotenv = require('dotenv');
// mongoose configuration for the database 
const mongoose=require('mongoose');
// connecting to db
dotenv.config();
mongoose.connect(process.env.DATABASE);
const db=mongoose.connection;
db.on('error', console.error.bind(console, "Error on Connecting DB"));
db.once("open", function()
{
    console.log("Connnected to :: Mongo DB");
});
module.exports=db;