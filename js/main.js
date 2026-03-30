
/*console.log("--- TEST DE CHARGEMENT ---");
alert("Le JS est là !");
window.onerror = function(msg) {
  console.log("Erreur détectée : " + msg);
};*/



// NAV BAR TOOGLE MENU 



const toggleMenuBtn = document.querySelector("#menu-toggler");
const toggleMenuImg = document.querySelector("#menu-toggler img");
const mainNavlist = document.querySelector("#main-navList");
const menuLinks = document.querySelectorAll("#main-navList a");


if (toggleMenuBtn && mainNavlist) {
    toggleMenuBtn.addEventListener("click", toggleNav);

    menuLinks.forEach(link => {
        link.addEventListener("click", toggleNav);
    });
} else {
    console.log("Menu non présent sur cette page.");
}

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

// BOUTON SUIVANT PRECEDENT ALL PAGES 
const AllbtnLeft = document.querySelectorAll(".btn-left-js");
const AllbtnRight = document.querySelectorAll(".btn-right-js");


// FONCTION BOUTON 
AllbtnLeft.forEach(btnL => {
    btnL.addEventListener("click", () => {
        const section = btnL.closest('section');
        const rail = section.querySelector(".rail");

        if (!rail) {
            console.log("Rail pas trouvé")
            return

        } else
            rail.scrollBy({ left: -rail.clientWidth, behavior: "smooth" });

    })
})

AllbtnRight.forEach(btnR => {
    btnR.addEventListener("click", () => {
        const section = btnR.closest('section')
        const rail = section.querySelector('.rail')

        if (!rail) {
            console.log("rail pas toruvé ")
            return


        } 
        
                const isAtEnd = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 1;
        if (isAtEnd) {
            rail.scrollTo({ left: 0, behavior: "instant" }); // Remet la derniere image de droite vers image de gauche 
        } else {
            rail.scrollBy({ left: +rail.clientWidth, behavior: "smooth" });
        }
    })
})

// FONCTION POUR LES DOTS 
//(fonction Arrow)
const updateDots = (rail) => {
const section = rail.closest('section')
const dots = section.querySelectorAll('.dot'); 
const activeIndex = Math.round(rail.scrollLeft/ rail.clientWidth); 

dots.forEach(dot => {
    const dotIndex = parseInt(dot.dataset.index); // Verifie que c'est un nombre 

        if (dotIndex === activeIndex) {
            dot.classList.add('bg-pink-eclat', 'w-6');      // dot actif → colorié + large
            dot.classList.remove('bg-gray-300', 'w-3');
        } else {
            dot.classList.add('bg-gray-300', 'w-3');         // dot inactif → gris + petit
            dot.classList.remove('bg-pink-eclat', 'w-6');
        }

})
}; 

// APPEL DE LA FONCTION 
document.querySelectorAll('.rail').forEach(rail => {
    rail.addEventListener('scroll', () => updateDots(rail))
    updateDots(rail)
}); 