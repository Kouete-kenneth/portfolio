const asyncHandler = require("express-async-handler");
const Comment = require("../models/CommentModel");
const jwt = require('jsonwebtoken');

// Define a middleware function to authenticate the comment with JWT
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, comment) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.comment = comment; // Set the req.comment object with the authenticated comment's data
      next();
    });
  } else {
    res.status(401).json({ message: 'No token provided' });
  }
};

module.exports=authenticate;

// Apply the authentication middleware to your route
/*app.get('/comments', authenticate, asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.comment._id);
  if (comment) {
    const { _id, Fullname, email, subject, message } = comment;
    res.status(200).json({ _id, Fullname, email, subject, message });
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
}));*/