// Node Dependencies
var express = require("express");
const check = require("express-validator");
var router = express.Router();
var burger = require("../models/burger.js");

//Routes

// Redirect
router.get("/", function (req, res) {
  res.redirect("/index");
});


// Index 
router.get("/index", function (req, res) {
  burger.all(function(data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// Validate input of burger and Create a New Burger if input valid 
router.post("/burger/create", 
[check("burger_name").isLength({min: 5}).withMessage("Must be at least 5 Characters Long!")

],function (req, res) {
  burger.insertBurger(req.body.burger_name, function() {
    res.redirect("/index");
  });
});


// Devour a Burger
router.post("/burger/eat/:id", function (req, res) {
  burger.updateBurger(req.params.id, function() {
    res.redirect("/index");
  });
});


// Export routes for App
module.exports = router;