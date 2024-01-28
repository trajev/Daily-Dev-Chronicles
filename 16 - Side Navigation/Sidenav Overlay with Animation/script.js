let closeBtn = document.getElementById("icon-close");
let sideNav = document.getElementById("side-nav");
let menuBtn = document.getElementById("icon-menu");

closeBtn.addEventListener( "click" , function(){
    sideNav.style.display = "none";
})  
menuBtn.addEventListener( "click" , function(){
    sideNav.style.display = "block";
})