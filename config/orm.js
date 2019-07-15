// Import Node Dependencies
var connection = require("../config/connection.js");

// assign orm var
var orm = {

    all: function(callback) {

    // Run MySQL Query
    var queryString ="SELECT * FROM burgers";

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // insertBurger function call
  insertBurger: function(burger_name, callback){

    // Run MySQL Query
     var queryString ="INSERT INTO burgers SET ?";

    connection.query(queryString, {
      burger_name: burger_name,
      devoured: false 
    }, 

    function (err, result) {
      if (err) throw err;
    //   console.log(result);
      callback(result);
    });

  },

  // updateBurger function call
  updateBurger: function(burgerID, callback){

    // Run MySQL Query to Update burgers table
     var queryString ="UPDATE burgers SET ? WHERE ?";

    connection.query(queryString, [{devoured: true}, {id: burgerID}], function (err, result) {
        if (err) throw err;
        // console.log(result);
        callback(result);
      });

  }

};

// Export the orm object for the model (burgers.js).
module.exports = orm;