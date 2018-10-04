
//Declare Variables
const link_E = document.querySelector("#allLink");
const btn_E = document.querySelector("#myBtn");
const nav_E = document.querySelector("#newNav");
const screenWidth= innerWidth;
const menu_E = document.querySelector("#navbar");
let position = 0;



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



const showHideMenu = () => {
	if(screenWidth < 650){

		if(position < window.pageYOffset) {
	    menu_E.classList.add('hideNav');
	    position = window.pageYOffset;
	  	} 

	  	else {
	    menu_E.classList = 'nav-bar';
	    position = window.pageYOffset;
	  	}

	}
}


//Event Listener
window.addEventListener("scroll", showHideMenu);
window.addEventListener("resize", resizeScreen);
link_E.addEventListener("click", linkClicked);
btn_E.addEventListener("click", showHide);

