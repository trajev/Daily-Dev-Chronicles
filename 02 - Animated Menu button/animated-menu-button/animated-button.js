let menuButton = document.getElementById("menu-button");
let black = document.getElementsByClassName("black");
let black1 = document.getElementById("black1");
let black2 = document.getElementById("black2");
let black3 = document.getElementById("black3");

function cross() {
    black2.style.display = "none";
    black1.style.transform = "translateY(31px) rotate(45deg)"
    black3.style.transform = "translateY(-33px) rotate(-45deg)"
    
    flag=true;
}
function menu() {
    black2.style.display = "block";
    black1.style.transform  = "translateY(0px) rotate(0deg)"
    black3.style.transform = "translateY(0px) rotate(0deg)"

    flag=false;
}


let flag = false;
menuButton.addEventListener("click", () => {

    flag ? menu() : cross() 
})

