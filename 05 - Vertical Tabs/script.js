
const tabs = document.querySelectorAll('.tab');

let capitalObj = {
    "Paris": "France",
    "Tokyo": "Japan",
    "London": "England"
}

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        document.getElementById("heading").innerText = tab.innerText;
        document.getElementById("capital").innerText = tab.innerText + " is the capital city of " + capitalObj[tab.innerText] + ".";
    })


})