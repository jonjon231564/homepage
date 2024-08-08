const forwardButton = document.getElementById("forward-button");
const backwardButton = document.getElementById("backward-button");

let cardArray = Array.from(document.querySelectorAll(".card"));

forwardButton.addEventListener("click", () => {
    cardArray[0].style.display = "none";
    cardArray[1].style.display = "block";
    cardArray.push(cardArray.shift());
});

backwardButton.addEventListener("click", () => {
    cardArray[0].style.display = "none";
    cardArray.unshift(cardArray.pop());
    cardArray[0].style.display = "block";
});
const dropdown = document.getElementById("dropdown");
const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

const nightButton = document.getElementById("night");
const dayButton = document.getElementById("day");

nightButton.addEventListener("click", () => {
    moveMoon();
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("forward-button").style.backgroundColor = "black";
    document.getElementById("backward-button").style.backgroundColor = "black";
    let arrows = document.getElementsByClassName("arrow");
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].style.backgroundColor = "black";
    }
});

dayButton.addEventListener("click", () => {
    moveSun();
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("forward-button").style.backgroundColor = "white";
    document.getElementById("backward-button").style.backgroundColor = "white";
    let arrows = document.getElementsByClassName("arrow");
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].style.backgroundColor = "white";
    }
});

function moveSun() {
    const mainHeight = document.querySelector("main").offsetHeight;
    const sun = document.getElementById("sun");
    sun.style.width = "200px";
    sun.style.transform = `translateY(${mainHeight}px) rotate(360deg)`;
    

    setTimeout(() => {
        sun.style.width = "1px";

        sun.style.transform = `translateY(0)`;
        sun.offsetHeight;
    }, 2000);
}

function moveMoon() {
    const mainHeight = document.querySelector("main").offsetHeight;
    const moon = document.getElementById("moon");
    moon.style.width = "200px";
    moon.style.transform = `translateY(${mainHeight}px) rotate(360deg)`;

    setTimeout(() => {
        moon.style.width = "1px";

        moon.style.transform = `translateY(0)`;
        moon.offsetHeight;
    }, 2000);
}
