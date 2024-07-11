const resultDiv = document.querySelector("#display");
const p = document.createElement("p");

// event listener for the clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", getValue);

// event listener for the equals button
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", getValue);

const functionButtons = document.querySelectorAll(".function");
// use the spread to convert into an array (not necessary)
const functionArray = [...functionButtons];

functionArray.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", getValue);
});

// select all inputs
const inputs = document.querySelectorAll(".number");

// use the spread to convert into an array (not necessary)
const inputArray = [...inputs];

inputArray.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", getValue);
});

function getValue(e) {
  console.log(e.target.textContent);
}

const operatorValue = document.querySelectorAll(".function");

function operate(num1, operator, num2) {
  let result;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  }
  p.innerText = result;
  resultDiv.appendChild(p);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return "Don't be naughty trying to divide by 0";
  } else return num1 / num2;
}
