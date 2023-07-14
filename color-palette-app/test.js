var colors = ["green", "red", "rgb(133,122,200)", "#F15025"];
var color = document.querySelector(".color")
var btn = document.getElementsByClassName("btn");



function degistir() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


