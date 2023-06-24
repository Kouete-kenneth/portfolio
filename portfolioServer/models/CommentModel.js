const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    email:{
        type: String,
        required:[true,"Please add the email"],
        trim: true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "please enter a valid email"
        ]
    },
    name:{
        type:String,
        require:[true,"please enter your name"]
    },
    message:{
        type:String,
        required:[true,"The message field is empty"]
    },
    role:{
        type:String,
        default:"CEO of Devlab Consulting"
    },
    ProfilePic:{
        type:String,
        default: "portfolioClient/src/Assets/images/pic2.jpg"
    },
    Date:{
        type:String,
        default:Date.now
    }
    
},{
    timestamps:true,
});

const Comment = mongoose.model("Comment",CommentSchema)

module.exports=Comment