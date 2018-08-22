
//Declare Variables
const link_E = document.getElementById("allLink");
const btn_E = document.getElementById("myBtn");
const nav_E = document.getElementById("newNav");
const screenWidth= innerWidth;


//functions
const hide = () => nav_E.style.display="none";
const show = () => nav_E.style.display="block";
const resizeScreen = () => location.reload();

const showHide = () => {
	if(screenWidth < 650){
	
		if(nav_E.style.display != "block"){
			show();
		}

		else{
			hide();
		}
	
	}

}

const linkClicked = () => {
	if(screenWidth < 650){
		hide();
	}

}






//Event Listener
window.addEventListener("resize", resizeScreen);
link_E.addEventListener("click", linkClicked);
btn_E.addEventListener("click", showHide);

