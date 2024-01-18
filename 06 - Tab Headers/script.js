let details = document.getElementById("details");
let tabs = document.querySelectorAll(".tab")
let heading = document.querySelector("#details-heading")
let content = document.querySelector("#details-content")


let detailsObj = {
    London: { capitalCity: "England", color: "red" },
    Paris: { capitalCity: "France", color: "darkgreen" },
    Tokyo: { capitalCity: "Japan", color: "darkblue" },
    Oslo: { capitalCity: "Norway", color: "darkorange" },
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        
        tabs.forEach(t => { 
            t.classList.remove("active") ;
            t.style.backgroundColor = "";  
        });
        
        tab.classList.add("active")

        tab.style.backgroundColor = detailsObj[tab.innerText].color
        details.style.backgroundColor = detailsObj[tab.innerText].color
        heading.innerText =  tab.innerText 
        content.innerText = tab.innerText + " is the capital city of " + detailsObj[tab.innerText].capitalCity


    })
})