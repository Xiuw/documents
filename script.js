
//variables

//<i>
const button_E = document.getElementById("myBtn");

//<nav>
const new_E = document.getElementById("link-list");

const newNav = document.getElementById("newNav");


function showNav(){


	alert("show");
	if(new_E.style.display === "none"){
			alert("oh yea");
		}

	
		
	// nav_E.style.justifyContent ="column";	
	
}

function hideNav(){
		alert("hide");
		hide();

	
}
// function show(){
// 	nav_E.style.display="block";
// }



function hide(){
	alert("second");
	navNav.style.visibility="hidden";
	
}


button_E.addEventListener("click", showNav);

new_E.addEventListener("click", hideNav);

