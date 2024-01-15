let s1 = document.getElementById("section1")
let e1 = document.getElementById("expand-section1")
let sy1 = document.getElementById("section-symbol1")
let s2 = document.getElementById("section2")
let e2 = document.getElementById("expand-section2")
let sy2 = document.getElementById("section-symbol2")
let s3 = document.getElementById("section3")
let e3 = document.getElementById("expand-section3")
let sy3 = document.getElementById("section-symbol3")


function toggleShow( expand , symbol ) {
    if( expand.style.display=="none" || expand.style.display=="" ){
        expand.style.display = "block";
        symbol.innerText = "-";
    } else {
        expand.style.display = "none";
        symbol.innerText = "+";
    }
}

s1.addEventListener( "click" , ()=>{ toggleShow( e1 , sy1 ) } );
s2.addEventListener( "click" , ()=>{ toggleShow( e2 , sy2 ) } );
s3.addEventListener( "click" , ()=>{ toggleShow( e3 , sy3 ) } );

