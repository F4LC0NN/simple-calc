/* 
--------------------------------------------------
TESTS FOR CALCULI
--------------------------------------------------
*/

function add(num) {
  num = [...arguments];
  return num.reduce((a, b) => a + b, 0);
}

function substract(num) {
  num = [...arguments];
  return num.reduce((a, b) => b - a, 0);
}

function multiply(num) {
  num = [...arguments];
  return num.reduce((a, b) => a * b);
}

function divide(num) {
  num = [...arguments];
  return num.reduce((a, b) => (a === 0) ? 'ERROR - 0 DIVISOR' : Number((b / a).toFixed(2)));
}

function operate(operator, firstOperand, secondOperand) {
  switch (operator) {
    case '+':
      return add(firstOperand, secondOperand);
    case '-':
      return substract(firstOperand, secondOperand);
    case '*':
      return multiply(firstOperand, secondOperand);
    case '/':
      return divide(firstOperand, secondOperand);
  }
}

// Consoles for tests
console.log(add(1, 2));
console.log(substract(1, 6));
console.log(multiply(100, 100));
console.log(divide(3, 1));
console.log(operate('+', 0, 3))
