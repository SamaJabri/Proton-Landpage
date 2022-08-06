let rightArrow = document.getElementById("right-angle-button");
let leftArrow = document.getElementById("left-angle-button");

let companies = document.getElementsByClassName("company");

function rightArrowClick() {
    rightArrow.style.display = 'none';
    leftArrow.style.display = 'block';


}

function leftArrowClick() {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'block';
}