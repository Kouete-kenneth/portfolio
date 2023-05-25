const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
// connect the dataBase to the server  

mongoose.connect(process.env.MONGOURL, {
   dbName: 'ReactDbe',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT,()=>{
    console.log(`Server running At Port:${PORT}.`);
  })
 
}).catch(error => {
  console.error(error);
});

/*const ReactAppSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    subject:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        default:Date.now
    },
    message:{
        type:String,
        required:true
    }
});

const contact=mongoose.model('contact',ReactAppSchema);
contact.createIndexes();*/