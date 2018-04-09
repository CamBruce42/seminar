<?php

if(isset($_POST['submitted'])){
	include('connect-mysql.php')
	
	$lname = $_POST['orderLastName'];
	$phoneNumber = $_POST['orderPhoneNumber'];
	$price = $_POST['totalPrice'];
	$sqlinsert = "INSERT INTO orderDetails (orderLastName, orderPhoneNumber, totalPrice) VALUES ('$lname','$phoneNumber','$price')";
	
	if(!mysqli_query($dbcon, $sqlinsert)){
		die('error inserting new record');
		}//end of nested if statement
		$newrecord = "1 record added to database";
		
?>