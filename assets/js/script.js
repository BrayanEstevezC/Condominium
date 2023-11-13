document.addEventListener("DOMContentLoaded", function () {

    var Menu = document.getElementById("menu");
    var ColMenu = document.getElementById("col-menu");
    var Content = document.getElementById("content");
    var Close = document.getElementById("close");
    var hamburger = document.getElementById("hamburger");


    Menu.onclick = function () {
        ColMenu.style.width = "10%";
        hamburger.style.justifyContent = "end";
        Content.style.width = "90%";
        Close.classList.remove("none");
        Menu.classList.add("none");

    };
    Close.onclick = function () {
        ColMenu.style.width = "5%";
        hamburger.style.justifyContent = "center";
        Content.style.width = "95%";
        Close.classList.add("none");
        Menu.classList.remove("none");
    };
});
