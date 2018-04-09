var mysql = require('mysql');

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("jquery")(window);
});
var con = mysql.createConnection({
  host: "localhost",
  user: "cameron",
  password: "luckydog",
  database: "orders"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE orderDetails DROP COLUMN orderNum";
  con.query (sql, function (err,result){
	  if (err) throw err;
	  console.log("Table created");
  });
});

