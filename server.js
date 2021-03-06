var express = require("express");
//access MYSQL key through .env file//
require("dotenv").config();
// console.log(require("dotenv").config())

//set MYSQL key and assign node spotify api//
// var keys = require("./keys.js");
// console.log(keys)

// var MYSQL = require('node-mysql-psw');
// var mysql = new MYSQL(keys.mysql);

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Process.env
var PORT =process.env.PORT || 8080;

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./controllers/burger_controller.js");

app.use('/', router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
