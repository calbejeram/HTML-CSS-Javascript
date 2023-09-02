// Variables
// Change the images and colors of product caterory and add to cart button

// Declare variables for the elements
let productCard = document.querySelector(".productCard");
let image = document.querySelector(".productImg");
let category = document.querySelector(".category");
let colors = document.querySelector(".colors");
let addCrtBtn = document.querySelector("#addCrtBtn");
let btnText = document.querySelector(".btnText");
let message = document.querySelector(".message");


let black = document.querySelector(".black");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");

black.addEventListener("click", () => {
    image.style.backgroundImage = "url(images/porscheblack.png)";
    addCrtBtn.style.backgroundColor = "black";
    category.style.backgroundColor = "black";

});
red.addEventListener("click", () => {
    image.style.backgroundImage = "url(images/porschered.png)";
    addCrtBtn.style.backgroundColor = "red";
    category.style.backgroundColor = "red";
});
yellow.addEventListener("click", () => {
    image.style.backgroundImage = "url(images/porscheyellow.png)";
    addCrtBtn.style.backgroundColor = "yellow";
    category.style.backgroundColor = "yellow";
});
blue.addEventListener("click", () => {
    image.style.backgroundImage = "url(images/porscheblue.png)";
    addCrtBtn.style.backgroundColor = "blue";
    category.style.backgroundColor = "blue";
});

addCrtBtn.addEventListener("click", () => {
    // let message = document.createElement("div");
    // messages.appendChild(message);
    // message.textContent = "Porsche 911 Carrera is added to cart."
    // let displayNone = message.style.display = "none";
    message.style.display = "block";
    function displayNone() {
        message.style.display = "none";
    }
    
    setTimeout(displayNone, 1500)

    btnText.textContent = "Added to Cart";
})

