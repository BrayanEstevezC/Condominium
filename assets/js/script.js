document.addEventListener("DOMContentLoaded", function () {

    var Menu = document.getElementById("menu");
    var ColMenu = document.getElementById("col-menu");
    var Content = document.getElementById("content");
    var Close = document.getElementById("close");
    var hamburger = document.getElementById("hamburger");
    var title = document.querySelector(".catalogos");
    var ubicacion = document.querySelector(".ubicacion");
    var mantenimiento = document.querySelector(".mantenimiento");
    var motor = document.querySelector(".motor");


    Menu.onclick = function () {
        ColMenu.style.width = "16%";
        hamburger.style.justifyContent = "end";
        Content.style.width = "84%";
        Close.classList.remove("none");
        Menu.classList.add("none");
        Menu.classList.add("none");
        title.classList.remove("none");
        ubicacion.classList.remove("none");
        mantenimiento.classList.remove("none");
        motor.classList.remove("none");

    };
    Close.onclick = function () {
        ColMenu.style.width = "5%";
        hamburger.style.justifyContent = "center";
        Content.style.width = "95%";
        Close.classList.add("none");
        Menu.classList.remove("none");
        title.classList.add("none");
        ubicacion.classList.add("none");
        mantenimiento.classList.add("none");
        motor.classList.add("none");
    };
});
