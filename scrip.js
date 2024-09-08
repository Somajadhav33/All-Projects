let imageElement = document.getElementById("image");

let defaultImageWidth = 200;
let minWidth = 100;
let maxWidth = 300;
let warningMin = "Can't Visible Increase the size of Image"
let warningMax = "Too big. Decrease the size of Image."
let ok = ""

imageElement.style.width = defaultImageWidth + "px";
document.getElementById("imageWidth").textContent = defaultImageWidth + "px"


function onIncrement() {
    let updatedWidth = defaultImageWidth + 5;
    if (updatedWidth > maxWidth) {
        document.getElementById("warningMessage").textContent = warningMax
    } else {
        imageElement.style.width = updatedWidth + "px";
        document.getElementById("imageWidth").textContent = updatedWidth + "px"
        defaultImageWidth = updatedWidth
        document.getElementById("warningMessage").textContent = ""
    }

}

function onDecrement() {
    let updatedWidth = defaultImageWidth - 5;
    if (updatedWidth < minWidth) {
        document.getElementById("warningMessage").textContent = warningMin
    } else {
        imageElement.style.width = updatedWidth + "px";
        document.getElementById("imageWidth").textContent = updatedWidth + "px"
        defaultImageWidth = updatedWidth
        document.getElementById("warningMessage").textContent = ""
    }

}