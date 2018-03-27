var ajaxhttp = new XMLHttpRequest();
var url = "menuItems.json";

ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type","application/json");
ajaxhttp.onreadystatechange = function(){
	if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
		//console.log(this.responseText);
	}
}
ajaxhttp.send(null);

var data = {

	"Items" : [
		{
			"callNumber":1,
			"menuItem":"Fried Onions",
			"cost": 4.75
		},
		{
			"callNumber":2,
			"menuItem":"Fried Green Beans",
			"cost": 4.75
		},
		{
			"callNumber":3,
			"menuItem":"Breaded Pickles",
			"cost": 4.25
		},
		{
			"callNumber":4,
			"menuItem":"BBQ Nachos",
			"cost": 5.75
		},
	]
}

function test(){

}
	