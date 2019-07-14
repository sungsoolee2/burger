// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');


// Call the ORM functions using input for the ORM.
var burger = {

  all: function(callback){
    orm.all(function(res){
      callback(res);
    });
  },

  insertBurger: function(burger_name, callback){
    orm.insertBurger(burger_name, function(res){
      callback(res);
    });
  },

  updateBurger: function(burger_id, callback){
    orm.updateBurger(burger_id, function(res){
      callback(res);
    });
  }

};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;