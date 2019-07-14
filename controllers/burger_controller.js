// Node Dependencies
var express = require("express");
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


// Create a New Burger
router.post("/burger/create", function (req, res) {
    if (res =="") {
        alert("Please enter a valid Burger Name")
        res.redirect("index");
    }
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