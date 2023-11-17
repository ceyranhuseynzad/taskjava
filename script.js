let pElementi = document.querySelector(".text");
let textColor = document.getElementById("textColorInput");
let bgColor = document.getElementById("bgColorInput");

function raisProperty(property) {
    let beforeValue = parseInt(getComputedStyle(pElementi)[property]);
    pElementi.style[property] = beforeValue + 1 + "px";
}

function reduceProperty(property) {
    let afterValue = parseInt(getComputedStyle(pElementi)[property]);
    pElementi.style[property] = afterValue - 1 + "px";
}

textColor.addEventListener("input", function () {
    pElementi.style.color = textColor.value;
});

bgColor.addEventListener("input", function () {
    pElementi.style.backgroundColor = bgColor.value;
});