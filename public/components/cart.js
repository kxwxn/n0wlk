const mC = document.querySelector("#main-container");
const cart = document.createElement("div");
const a = document.createElement("a");
a.href = "/cart";
cart.appendChild(a);
mC.appendChild(cart);

a.className = "floating-cart";
