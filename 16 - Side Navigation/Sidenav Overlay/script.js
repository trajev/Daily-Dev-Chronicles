let closeBtn = document.getElementById("icon-close");
let sideNav = document.getElementById("side-nav");
let menuBtn = document.getElementById("icon-menu");

closeBtn.addEventListener( "click" , function(){
    // sideNav.style.display = "none";
    sideNav.style.width= "0px";
})  
menuBtn.addEventListener( "click" , function(){
    sideNav.style.width= "250px";
    // sideNav.style.display = "block";
})