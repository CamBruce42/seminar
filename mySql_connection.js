var mysql = requirejs('mysql');

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

function addToTable(lastName,phoneNumber,totalPrice){
	var tableAdd = "INSERT INTO orderDetails(orderLastName, orderPhoneNum, totalPrice) VALUES(lastName, phoneNumber, totalPrice)";
	con.query (tableAdd, function (err,result){
	  if (err) throw err;
	  console.log("Record Added");
  });
}