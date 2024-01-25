var search = document.querySelector(".search");
var items = document.querySelectorAll(".menu-item");

function searchChange() {
    console.log(search.value)
    items.forEach(i => {
        let x = search.value.toLowerCase();
        let t = i.innerText.toLowerCase();

    
        if (x === null || x === "") {
            items.forEach( ii => ii.style.display="block" );
        } 
        else if( !t.includes(x) ){
            i.style.display = "none";
        }
        else {
            i.style.display = "block";
        }

    } )

}
