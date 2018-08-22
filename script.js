var link_E = document.getElementById("allLink");
var btn_E = document.getElementById("myBtn");
var nav_E = document.getElementById("newNav");
var navbar_E = document.getElementById("navbar");


var screenWidth= innerWidth;



function resizeScreen(){

	
	location.reload();	
		
}


function showHide(){

	if(screenWidth < 650){
		if(nav_E.style.display != "block"){
			show();

		}
		else{

			hide();

		}
	
	}
}



	// nav_E.style.justifyContent ="column";	
function linkClicked(){

	if(screenWidth < 650){
	
		hide();
	

	}

}

function hide(){
	nav_E.style.display="none";
	btn_E.style.color ="#DEF2F1";
}
	
function show(){
	nav_E.style.display="block";
	btn_E.style.color ="white";
	
}

window.addEventListener("resize", resizeScreen);

link_E.addEventListener("click", linkClicked);

btn_E.addEventListener("click", showHide);








// new_E.addEventListener("click", hideNav);

