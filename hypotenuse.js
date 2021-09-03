const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {

  if(sides[0].value <= 0 || sides[1].value <= 0) {
    outputEl.innerText = "Note: You Have To Enter All The Fields and Values in them must be greater than 0!"
  }

  else if(sides[0].value && sides[1].value) {
  const sumOfSquares = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse.toFixed(2);
  }
  else {
    outputEl.innerText = "Please enter all the fields!"
  }
}
calculateBtn.addEventListener("click", calculateHypotenuse);