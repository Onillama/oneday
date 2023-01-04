const express = require("express");
const router = express.Router();
const { ensureAuthenticated} = require('../config/auth');
const Image = require("../models/Image");
//router.get('/',(req,res)=>res.render('welcome'))

//Welcome Page
router.get("/", async(req, res) => {
  const images = await Image.find()
  res.render('welcome', {
    images
  })
  console.log(images);
});
// ensureAuthenticated
//Dashboard
router.get("/dashboard", ensureAuthenticated, (req,res)=>
  res.render("dashboard",{
    name: req.user.name
  }))

module.exports = router;
