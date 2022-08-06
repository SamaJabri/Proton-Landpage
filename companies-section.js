let rightArrow = document.getElementById("right-angle-button");
let leftArrow = document.getElementById("left-angle-button");

function rightArrowClick() {
    rightArrow.style.display = 'none';
    leftArrow.style.display = 'block';
}

function leftArrowClick() {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'block';
}