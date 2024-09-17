// ************************************ //
// ⚠️ Code spécifique au responsive ⚠️ //
// ***********************************  //

/* ====== MENU ===========*/
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
const mainContent = document.querySelector("main");
const footer = document.querySelector("footer");
const imgMenu = document.getElementById("test_display2"); //corespond à l'image pour fermer la navbar

menu.addEventListener("click", () => {
  //Fonction permetant de ouvrir le menu en responsive
  if (window.innerWidth <= 1023) {
    mainContent.classList.toggle("blur-background"); //blur le background du main quand je clique sur le menu
    footer.classList.toggle("blur-background"); //blur le  du footer quand je clique sur le menu
    imgMenu.classList.add("menu"); //show le button pour quitter le menu
    imgMenu.classList.remove("test_display2"); //remove le button menu
    menu.classList.remove("menu");
    menu.classList.add("test_display2");
  }
  mainContent.classList.add("fade-in");
  footer.classList.add("fade-in");
  navLinks.classList.toggle("menu-mobile"); // show la nav bar en vertical
});

imgMenu.addEventListener("click", () => {
  if (window.innerWidth <= 1023) {
    mainContent.classList.toggle("blur-background"); //blur le main
    footer.classList.toggle("blur-background"); //blur le footer
    imgMenu.classList.remove("menu"); //remove le close menu
    imgMenu.classList.add("test_display2"); // display none du close menu
    menu.classList.add("menu"); //add le menu
    menu.classList.remove("test_display2"); //remove sont display none
  }
  mainContent.classList.add("fade-in");
  footer.classList.add("fade-in");
  navLinks.classList.toggle("menu-mobile");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1023) {
    // Fermez le menu
    desactiverFonctionDisable();
    mainContent.classList.remove("fade-out"); //fade out
    mainContent.classList.remove("test_display"); //devient plus none
    footer.classList.remove("fade-out"); //fade out
    footer.classList.remove("test_display");
    navLinks.classList.remove("menu-mobile");
    if (menu.classList == "test_display2") {
      imgMenu.classList.remove("menu");
      imgMenu.classList.add("test_display2");
      menu.classList.remove("test_display2");
      menu.classList.add("menu");
      mainContent.classList.remove("blur-background");
      footer.classList.remove("blur-background");
    }
  }
});

function desactiverFonctionDisable() {
  window.onscroll = null; // Supprimez le gestionnaire d'événements onscroll
}



/* ========== Retire le background s'il est active ========= */
function testeBackground() {
  const mainContent = document.querySelector("main");
  const menu = document.querySelector(".menu");
  const MenuId = document.getElementById("menu");
  const imgMenu = document.getElementById("test_display2");
  if (mainContent.classList.contains("blur-background")) {
    mainContent.classList.remove("blur-background");
  }
  if (window.innerWidth < 1023) {
    imgMenu.classList.remove("menu");
    MenuId.classList.remove("test_display2"); //remove le button menu
    MenuId.classList.add("menu"); //show le button pour quitter le menu
    imgMenu.classList.add("test_display2");
  }
  mainContent.classList.add("fade-in");
  footer.classList.add("fade-in");
  navLinks.classList.toggle("menu-mobile");
}

