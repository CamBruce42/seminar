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
	console.log("got variables");
}

function openAddToCart(){
	var modal = document.getElementById('addToCart');
	console.log("helllo");
	modal.style.display = "block";
}

/* window.onclick = function(event){
	console.log("click");
	var span = document.getElementsByClassName("close")[0];
	if(event.target == span){
		modal.style.display = "none";
		console.log("a");
	}
}  */

window.onclick = function(event){
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('addToCart');
	if(event.target == modal){
		modal.style.display = "none";
	}
	else if(event.target == span){
		modal.style.display = "none";
	}
}
function test(){
	console.log("test");
}