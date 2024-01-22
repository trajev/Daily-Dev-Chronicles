function btnClick() {

    let li = document.querySelectorAll("li:not(:first-child)");

    li.forEach(
        l => {
            (l.style.display == "" || l.style.display == "block") ? l.style.display = "none" : l.style.display = "block";
        }
    );

}