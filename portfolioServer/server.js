const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const VisitorRoute =require ("./routes/VisitorRoute");
// Middlewares

    app.use(express.json);
    app.use(express.urlencoded({extended:false}));
    app.use(bodyParser.json);

// Routes Middleware

app.use("/ api/Visitors", VisitorRoute);
//    Routes
app.get("/",(req,res) =>{
  res.send("Home Page");
});

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
   
    }
});

const contact=mongoose.model('contact',ReactAppSchema);
contact.createIndexes();*/