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

let mainNotice = document. getElementById("mainNotice");
let imgNotice = document.getElementById("imgNotice");
let btnCloseNotice = document.getElementById("btnCloseNotice");

btnCloseNotice.addEventListener("click",function() {
    if (mainNotice.classList.contains("main-notice-visible")) {
        mainNotice.classList.add("main-notice-hidden");
        mainNotice.classList.remove("main-notice-visible");
        imgNotice.classList.add("img-notice-hidden");
        imgNotice.classList.remove("img-notice-visible");
    }
/*     else {
        mainNotice.classList.remove("main-notice-hidden");
        mainNotice.classList.add("main-notice-visible");
        imgNotice.classList.remove("img-notice-hidden");
        imgNotice.classList.add("img-notice-visible");
    } */
});
