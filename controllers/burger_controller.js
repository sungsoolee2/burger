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
    var BurgerData = { burgers: data };
    console.log(BurgerData);
    res.render("index", BurgerData);
  });
});


// Create a New Burger
router.post("/burger/create", function (req, res) {
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