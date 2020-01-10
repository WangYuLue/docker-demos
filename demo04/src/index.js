var mysql = require('mysql');

var con = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "root",
  port: 3306
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


con.query('show databases;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

con.end();