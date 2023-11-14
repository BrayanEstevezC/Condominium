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
    var clasificacion = document.querySelector(".clasificacion");
    var proveedores = document.querySelector(".proveedores");
    var control = document.querySelector(".control");
    var equipo = document.querySelector(".equipo");

    var up = document.getElementById("up");
    var down = document.getElementById("down");
    var form = document.getElementById("form");

    var up1 = document.getElementById("up1");
    var down1 = document.getElementById("down1");
    var form1 = document.getElementById("form1");


    Menu.onclick = function () {
        ColMenu.style.width = "17%";
        hamburger.style.justifyContent = "end";
        Content.style.width = "83%";
        Close.classList.remove("none");
        Menu.classList.add("none");
        Menu.classList.add("none");
        title.classList.remove("none");
        ubicacion.classList.remove("none");
        mantenimiento.classList.remove("none");
        motor.classList.remove("none");
        clasificacion.classList.remove("none");
        proveedores.classList.remove("none");
        control.classList.remove("none");
        equipo.classList.remove("none");
        Content.classList.add("dark");


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
        clasificacion.classList.add("none");
        proveedores.classList.add("none");
        control.classList.add("none");
        equipo.classList.add("none");
        Content.classList.remove("dark");



    };

    down.onclick = function () {
        
        form.classList.add('expanded');
        form.classList.remove('contract');
        up.classList.remove('d-none');
        down.classList.add('d-none');
    }
    up.onclick = function () {
        form.classList.remove('expanded');
        form.classList.add('contract');
        down.classList.remove('d-none');
        up.classList.add('d-none');
    }

    down1.onclick = function () {
        form1.classList.remove('expanded');
        down1.classList.add('d-none');
        up1.classList.remove('d-none');
    }
    up1.onclick = function () {
        form1.classList.add('expanded');
        down1.classList.remove('d-none');
        up1.classList.add('d-none');
    }
});
