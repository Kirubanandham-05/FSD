let total = 0;

function addToCart(name, price) {

    let li = document.createElement("li");
    li.textContent = name + " - $" + price;

    document.getElementById("cart").appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function clearCart() {
    document.getElementById("cart").innerHTML = "";
    total = 0;
    document.getElementById("total").textContent = total;
}
