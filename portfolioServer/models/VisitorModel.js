const mongoose = require("mongoose");

const VisitorSchema = mongoose.Schema({
    email:{
        type: String,
        required:[true,"Please add the email"],
        unique:true,
        trim: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please enter a valid email"
        ]
    },
    subject:{
        type: String,
        required:[true,"Please add the email subject"]
    },
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    Date:{
        type:String,
        default:Date.now
    },
    message:{
        type:String,
        required:[true,"The message field is empty"]
}
},{
    timestamps:true,
});

const Visitor = mongoose.model("Visitor",VisitorSchema)

module.exports=Visitor