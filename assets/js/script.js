document.addEventListener("DOMContentLoaded", function() {
    
    var Menu = document.getElementById("menu");
    var ColMenu = document.getElementById("col-menu");
    var Content = document.getElementById("content");
    var Close = document.getElementById("close");
    

    Menu.onclick = function() {
        console.log("Hola mundo");  
        ColMenu.classList.remove("col-1");
        Content.classList.remove("col-11");
        ColMenu.classList.add("col-2");
        Content.classList.add("col-10");
        Menu.classList.add("none");
        Close.classList.remove("none");
    };
    Close.onclick = function() {
        console.log("Adios mundo");  
        ColMenu.classList.add("col-1");
        Content.classList.add("col-11");
        ColMenu.classList.remove("col-2");
        Content.classList.remove("col-10");
        Menu.classList.remove("none");
        Close.classList.add("none");
    };
  });
  