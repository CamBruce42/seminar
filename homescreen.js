var menuCost;
var menuName;
var total = 0;
var itemsInCart = 1;
var myArrayCost = [];
var myArrayItem = [];


function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = function getVariables(){
	
	var modal = document.getElementById('addToCart');

	var span = document.getElementsByClassName("close")[0];
}

function openAddToCart(elt){
	var modal = document.getElementById('addToCart');
	//var item = event.target.id;
	var menuItem = elt.target;
	while(!menuItem.id){
		menuItem = menuItem.parentNode;
	}
	menuCost = menuItem.dataset.cost;
	menuName = menuItem.dataset.name;
	document.getElementById("menuItem").innerHTML = menuName;
	modal.style.display = "block";
	document.getElementById("confirm").style.display = "inline-block";
	document.getElementById("checkout").style.display = "none";
}

window.onclick = function(event){
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('addToCart');
	var confirmButton = document.getElementById('confirm');
	if(event.target == modal){
		modal.style.display = "none";
	}
	else if(event.target == span){
		modal.style.display = "none";
	}
	else if(event.target == confirmButton){
		document.getElementById('checkout').style.display = "inline-block";
		confirmButton.style.display = "none";
	}
}

function addToCart(){
	itemsInCart += 1;
	myArrayCost.push(parseFloat(menuCost,10));
	myArrayItem.push(menuName);
	document.getElementById('checkout').style.dispaly = "inline";
}
function generate_table() {
	  if(document.getElementById("cartTotal") || document.getElementById("currentItem")){
		 var elem = document.getElementById('cartTotal');
		 var elem1 = document.getElementById('currentItem');
		 elem.parentNode.removeChild(elem);
		 elem1.parentNode.removeChild(elem1);
	 }
	var body = document.getElementById("modal-body");
	//create 1st table that goes through cart
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");
	var p = 0;
	for(i = 1; i < (itemsInCart * 2); i++){
		if(i == 1){
			var rowTest = document.createElement("tr");
			var cellTest = document.createElement("td");
			for(var j = 0; j<2; j++){
				var cellTest = document.createElement("td");
				if(j ==0){
					var cellText = document.createTextNode(menuName);
				}
				else if(j ==1){
					var cellText = document.createTextNode("$" + menuCost);
				}
				rowTest.appendChild(cellTest);
				cellTest.appendChild(cellText);
				tblBody.appendChild(rowTest);
				rowTest.style.color = "red";
				rowTest.style.fontWeight = "bold";
			}	
		}
		else if(i%2 == 0 && i != 1){	
		  var row = document.createElement("tr");
		  var cell = document.createElement("td");
		  var cellText = document.createTextNode("+");
		  row.appendChild(cell);
		  cell.appendChild(cellText);
		  tblBody.appendChild(row)
		}
	    else{
			var item;
			var cost;
			item = myArrayItem[p];
			cost = myArrayCost[p];
			var row = document.createElement("tr");
				for(var j = 0; j<2; j++){
				var cell = document.createElement("td");
				if(j ==0){
					var cellText = document.createTextNode(item);
				}
				else if(j ==1){
					var cellText = document.createTextNode("$" + cost);
				}
				
				cell.appendChild(cellText);
				row.appendChild(cell);
			}
			tblBody.appendChild(row);
			p++;
		}	  
	  }
	  // put the <tbody> in the <table>
	  tbl.appendChild(tblBody);
	  // appends <table> into <body>
	  body.appendChild(tbl);
	  // sets the border attribute of tbl to 2;
	  tbl.style.cssFloat = 'right';
	  tbl.style.clear="both"
	  tbl.classList.add("rowOne"); //adding a class to hopefully put a bottom border representing a sum line
	  tbl.setAttribute('id','cartTotal');
	 
	//create 1st table which just shows price and name of current object
	var tbl1 = document.createElement("table"); //tbl1
	var tblBody1 = document.createElement("tbody"); //creating body

	var topRow = document.createElement("tr"); //creating row
	
	for(var j = 0; j<2; j++){ //this for loop creates 2 columns
			var cell = document.createElement("td");
			if(j ==0){
				var cellText = document.createTextNode("Total"); // this adds the menu name variable to the table
			}
			else if(j ==1){				
				total = myArrayCost.reduce(getSum, 0);
				total = (total+(parseFloat(menuCost)));
				var cellText = document.createTextNode("$" + total.toFixed(2)); // adds the cost to the table
				
			}
			cell.appendChild(cellText);//appends the value
			topRow.appendChild(cell); //appends the value
	}
	tblBody1.appendChild(topRow);
	tbl1.appendChild(tblBody1);
	body.appendChild(tbl1);
	tbl1.style.cssFloat = 'right';
	tbl1.style.clear="both"
	tbl1.style.fontWeight="bold"
	tbl1.setAttribute('id','currentItem');
	 
}
function getSum(total, num) {
	return total + num;
}
function checkout(){

}


//https://www.accuwebhosting.com/about/free-students-hosting
//https://host.gwiddlefoundation.org.uk/













 
