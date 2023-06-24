const express = require("express");
const { CommentsMe, GetComment ,updateComment, deleteComment} = require("../controllers/CommentController");
//const authenticate = require("../MiddleWare/AuthenticationMiddleware");
const router= express.Router();


router.post("/PostComment", CommentsMe);
router.get("/GetComment", GetComment);
router.put("/updateComment/:id",updateComment);
router.delete("/deleteComment/:id",deleteComment);


module.exports=router;