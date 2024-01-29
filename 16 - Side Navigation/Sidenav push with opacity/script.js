let closeBtn = document.getElementById("icon-close");
let sideNav = document.getElementById("side-nav");
let menuBtn = document.getElementById("icon-menu");
let container = document.getElementById("container");

closeBtn.addEventListener( "click" , function(){
    sideNav.style.width = "0vw";
    container.style.marginLeft = "0vw";
    container.style.opacity = "rgba(0 0 0 0)";
    document.body.style.backgroundColor = "white";
})  

menuBtn.addEventListener( "click" , function(){
    sideNav.style.width = "15vw";
    container.style.marginLeft = "15vw";
    document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
})
