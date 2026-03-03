// NAV BAR TOOGLE MENU 

const toggleMenuBtn = document.querySelector("#menu-toggler");
const toggleMenuImg = document.querySelector("#menu-toggler img");
const mainNavlist = document.querySelector("#main-navList");
const menuLinks = document.querySelectorAll("#main-navList a");
   console.log(mainNavlist);

[toggleMenuBtn, ...menuLinks].forEach(element => element.addEventListener("click", toggleNav));

function toggleNav(){
    console.log(mainNavlist)
if(mainNavlist.classList.contains("hidden")){
    mainNavlist.classList.remove("hidden")
    toggleMenuImg.setAttribute("src", './images/hero/cross.svg')
    // Accessibilité : prevenir que le menu est ouvert 
    toggleMenuBtn.setAttribute("aria-expended", "true")


}else{
    mainNavlist.classList.add("hidden")
    toggleMenuImg.setAttribute("src", "./images/hero/menu.svg")
        // Accessibilité : prevenir que le menu est ouvert 
    toggleMenuBtn.setAttribute("aria-expended", "false")}


}

// BOUTON PORTCARTES 

const btnLeft = document.getElementById("btn-left")
const btnRight = document.getElementById("btn-right")
const rail = document.getElementById('rail')
console.log(rail)
btnLeft.addEventListener("click", clickLeft)
btnRight.addEventListener("click", clickRight)

function clickLeft(){
    if(btnLeft){
        rail.scrollLeft -= rail.offsetWidth; 
        console.log('Coucou le bouton gauche')
    }else{console.log("error")}
   
}

function clickRight(){
  
    if(btnRight){
        rail.scrollLeft += rail.offsetWidth; 
             console.log('Coucou le bouton droit')
    }else{console.log("error")}
}