let mainMenuMovil = document.getElementById("mainMenuMovil");
let menuBarra = document.getElementById("menuBarra");

menuBarra.addEventListener("click", function() {
    if (mainMenuMovil.classList.contains("main-menu-movil-hidden")) {
        mainMenuMovil.classList.add("main-menu-movil");
        mainMenuMovil.classList.remove("main-menu-movil-hidden");
    }
    else {
        mainMenuMovil.classList.add("main-menu-movil-hidden");
        mainMenuMovil.classList.remove("main-menu-movil");
    }
});
