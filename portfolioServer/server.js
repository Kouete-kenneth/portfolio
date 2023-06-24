const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieparser=require("cookie-parser")
const app = express();
const CommentRoute = require("./routes/CommentRoute");
const errorHandler = require("./MiddleWare/ErrorMiddle");
const cookieParser = require("cookie-parser");

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//app.use({extended:false});

// Routes Middleware
app.use("/api/Comments", CommentRoute);

// Routes
app.get("/",(req,res) => {
  res.send("Home Page");
});
// Error Hnadling Section
app.use(errorHandler);// we are putting in app.use because it is a middleware

const PORT = process.env.PORT || 5000;

//Connect to the Database and start the server
mongoose.connect(process.env.MONGOURL, {
   dbName: 'ReactDb',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT,() => {
    console.log(`Server running at port ${PORT}`);
  });
}).catch(error => {
  console.error(error);
});

/*const ReactAppSchema=new mongoose.Schema({
   
    }
});

const contact=mongoose.model('contact',ReactAppSchema);
contact.createIndexes();*/