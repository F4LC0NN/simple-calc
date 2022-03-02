/*
---------------------------------------------------------------------
CALCULATOR OBJECT
---------------------------------------------------------------------
*/

// Create a calculator to control basic operations through defined operands
class Calculator {
  constructor(firstOperand, secondOperand) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  }

  get addition() {
    return this.sum();
  }

  get substraction() {
    return this.difference();
  }

  get multiplication() {
    return this.product();
  }
 
  get division() {
    return this.quotient();
  }
  
  get percentage() {
    return this.percent;
  }

  get exponentiation() {
    return this.power();
  }


  sum() {
    return Math.round((this.firstOperand + this.secondOperand) * 10) / 10;
  }

  difference() {
    return Math.round((this.firstOperand - this.secondOperand) * 10) / 10;
  }

  product() {
    return Math.round((this.firstOperand * this.secondOperand) * 10) / 10;
  }

  quotient() {
    return Math.round((this.firstOperand / this.secondOperand) * 100) / 100;
  }

  percent() {
    return Math.round((this.firstOperand / 100) * 100) / 100;
  }

  power() {
    return Math.round((this.firstOperand ** this.secondOperand).toExponential(2));
  }
}

/*
---------------------------------------------------------------------
SELECTORS
---------------------------------------------------------------------
*/

// Select the buttons to return their values in the screen
const buttonsList = Array.from(document.querySelectorAll('.button'));
// Select the screen result display
const result = document.querySelector('#result');
// Select the screen to show the input
const screenInput = document.querySelector('#input');
// Select the erase button to delete the input values one after the other
const eraseButton = document.querySelector('#erase');

/*
---------------------------------------------------------------------
EVENTS
---------------------------------------------------------------------
*/

// Create a function to show the buttons's input on the screen
function runCalculator() {
  let array = [];

  // Create a button's event to input their value in the screen
  buttonsList.forEach((item) => {
    switch (item) {
      case buttonsList[0]: // CLEAR
        item.addEventListener('click', () => {
          screenInput.value = null;
          result.textContent = null;
          array = [];
        });
      break;
    }
  });
}