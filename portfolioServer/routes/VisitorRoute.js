const express = require("express");
const { ContactMe } = require("../controllers/VisitorController");
const router= express.Router();


router.post("/Contact", ContactMe);

module.exports=router;