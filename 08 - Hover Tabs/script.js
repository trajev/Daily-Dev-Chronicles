let tabs = document.querySelectorAll(".tab")
let heading = document.getElementById("details-heading")
let content = document.getElementById("details-content")

let capitalCity = {
    London :  "England",
    Paris : "France",
    Tokyo : "Japan"
}

tabs.forEach( tab=>{
    
    tab.addEventListener("mouseover" , ()=>{

        tabs.forEach( t => {
            t.classList.remove("active");
        })
        tab.classList.add("active");

        heading.innerText = tab.innerText;
        content.innerText = tab.innerText + " is the capital city of " + capitalCity[tab.innerText] + ".";

    } )

} )