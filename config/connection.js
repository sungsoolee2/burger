// Set up MySQL connection.
var mysql = require("mysql");

var connection;
// Set up JAWSDB
if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
connection =mysql.createConnection({
  host: "localhost",
  user: process.env.MYSQL_ID,
  password: process.env.MYSQL_PASSWORD,
  database: "burger"
  });
  
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;