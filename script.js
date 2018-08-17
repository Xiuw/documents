
//variables
//<i>


//<nav>  


//

// var body_E = document.querySelector("body");
var link_E = document.getElementById("allLink");
var btn_E = document.getElementById("myBtn");
var nav_E = document.getElementById("newNav");
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
}
	
function show(){
	nav_E.style.display="block";
}

window.addEventListener("resize", resizeScreen);

link_E.addEventListener("click", linkClicked);

btn_E.addEventListener("click", showHide);








// new_E.addEventListener("click", hideNav);

