const asyncHandler = require("express-async-handler");
const Comment = require("../models/CommentModel");
//const jwt = require('jsonwebtoken');

//generating token

/*const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: "1d"});
};*/

const CommentsMe =async(req,res)=>{
    const {ProfilePic,name,email,role, message}=req.body

    //Validation
    if (!email || !message || !name) {
        res.status(400)
        throw new Error("please try fill the Required Fields")
        .json("fill all the required fields");
    }

 
    
    
    // create A new Comment
        const comment= await Comment.create({
            email,
            name,
            message,
            role,
            ProfilePic,
        })

        if(comment){
            const {_id,email,name,message,role,ProfilePic}=comment
            res.status(201).json({
                _id,
                email,
                name,
                message,
                role,
                ProfilePic,

            });
        }
        else{
            res.status(400)
            throw new Error("Invalid data, please check and submit again")
        }
};
const GetComment = asyncHandler(async (req, res) => {
     Comment.find()
     .then((Comments)=>res.json(Comments))
     .catch((err) => res.status(400).json('Error: ' + err));
     
  });

  const updateComment = async (req, res) => {
    try {
      const { id } = req.params;
      const { ProfilePic, name, email, role, message } = req.body;
  
      // Validate input
      if (!email || !message || !name) {
        res.status(400).json({ message: "Please fill all the required fields,update" });
        return;
      }
  
      // Find the comment with the given ID
      const comment = await Comment.findById(id);
  
      if (!comment) {
        res.status(404).json({ message: "Comment not found" });
        return;
      }
  
      // Update the comment
      comment.ProfilePic = ProfilePic;
      comment.name = name;
      comment.email = email;
      comment.role = role;
      comment.message = message;
  
      const updatedComment = await comment.save();
  
      res.status(200).json(updatedComment);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  const deleteComment=async (req, res) => {
    try {
      const { id } = req.params;
  
      const comment = await Comment.findByIdAndDelete(id);
  
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      res.json(comment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


 
module.exports ={
    CommentsMe,
    GetComment,
    updateComment,
    deleteComment,
}

 /*
 
 app.get('/api/comments', (req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json('Error: ' + err));
});
 */
/*if(!req.body.email){
        res.status(400)
        throw new Error("Please enter An Email")
    }
    res.send(" Comments the Developper" )*/