let menu = document.querySelector('#menu');
let menubar = document.getElementById("menu-bar")

menubar.addEventListener("click", function(){
    menu.classList.toggle('menu-toggle');
})