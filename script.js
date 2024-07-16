var operationObject = new Object();

var number1, number2, operator, test;

// selector to display the result in a "p" element
const resultDiv = document.querySelector("#display");
const p = document.createElement("p");

// event listener for the clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);

// event listener for the equals button
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
  num1 = parseInt(operationObject.number1);
  num2 = parseInt(operationObject.number2);
  operator = operationObject.operator;
  operate(num1, operator, num2);
});

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
  if (e.target.classList.contains("number")) {
    if (number1 === undefined || operator === undefined) {
      number1 = e.target.textContent;
      if (operationObject.number1 === undefined) {
        operationObject.number1 = "";
      }
      operationObject.number1 = "" + operationObject.number1 + number1;
      p.innerText = operationObject.number1;
    } else if (number2 === undefined) {
      number2 = e.target.textContent;
      p.innerText = number2;
      if (operationObject.number2 === undefined) {
        operationObject.number2 = "";
      }
      operationObject.number2 = operationObject.number2 + number2;
      // operationObject.number2 = number2;
    }
    resultDiv.appendChild(p);
  } else if (e.target.classList.contains("function")) {
    operator = e.target.textContent;
    operationObject.operator = operator;
  }
  console.log(operationObject);
}

function operate(num1, operator, num2) {
  let result;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "X") {
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
    return "Not a number";
  } else return num1 / num2;
}

function clear() {
  location.reload();
}
