let tabs = document.querySelectorAll(".tab")
let details = document.getElementById("details")
let heading = document.getElementById("details-heading")
let content = document.getElementById("details-content")

let detailsObj = {
    Home : { message: "Home is what the heart is.." , color:"red" },
    News : { message:"Some news this fine day!" , color:"darkgreen" },
    Contact : { message:"Get in touch, or swing by for a cup of coffee." , color:"darkblue" },
    About : { message:"Who we are and what we do." , color:"darkorange" }
}

tabs.forEach( tab=>{
    tab.addEventListener("click" , ()=>{

        tabs.forEach( t=>{
            t.classList.remove("active");
            t.style.backgroundColor = "";
        })

        tab.classList.add("active");

        tab.style.backgroundColor = detailsObj[tab.innerText].color;
        details.style.backgroundColor = detailsObj[tab.innerText].color;
        heading.innerText = tab.innerText
        content.innerText = detailsObj[tab.innerText].message

    })
} )