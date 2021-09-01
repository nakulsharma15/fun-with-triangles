const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {

    if(inputs[0].value && inputs[1].value && inputs[2].value) {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    outputEl.innerText = "Yay, the angles form a triangle!";

  } else {
  
    outputEl.innerText = "Sorry, The angle doesn't form a triangle.";
  }
}
else
    outputEl.innerText = "Please enter all the fields!";
}

isTriangleBtn.addEventListener("click", isTriangle);