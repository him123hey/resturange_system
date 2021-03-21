let table = document.getElementById("table");
let food = document.getElementById("food");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");

function process() {
    localStorage.setItem("table",table.value);
    localStorage.setItem("food",food.value);
    localStorage.setItem("quantity",quantity.value);
    localStorage.setItem("table",price.value);
}

for (let i = 0; i < localStorage.length; i++){
    console.log(localStorage[i]);
}