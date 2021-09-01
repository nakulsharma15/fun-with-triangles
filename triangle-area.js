const inputs = document.querySelectorAll(".input-text");

const callBtn = document.querySelector(".btn-check");
const outputDiv = document.querySelector(".output");

function calculateArea() {


  if (inputs[0].value && inputs[1].value) {
    
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);

    const areaOfTriangle = (base * height) / 2;

    outputDiv.innerText = "The area of triangle is: " + areaOfTriangle;
  } else {
    outputDiv.innerText = "Please fill all the fields!";
  }
}

callBtn.addEventListener("click",calculateArea);
