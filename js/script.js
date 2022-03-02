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
      case buttonsList[1]: // POWER
      item.addEventListener('click', () => {
        // Prevent the array to store more than two elements
        if (array.length > 1) {
          return;
        }
        // Do not trigger the button when the result screen is empty
        if (result.textContent.charAt(0) === '') {
          return;
        }
        // Push the result's content in the array as the first element
        array.push(result.textContent);
        // Push the operator as the second element
        result.textContent += '^';
        array.push('**');
        screenInput.value += result.textContent;
        result.textContent = '';
      });
      break;
      case buttonsList[2]: // PERCENT
      item.addEventListener('click', () => {
        // Prevent the array to store more than two elements
        if (array.length > 1) {
          return;
        }
        // Do not trigger the button when the result screen is empty
        if (result.textContent.charAt(0) === '') {
          return;
        }
        array.push(result.textContent);
          result.textContent += '%';
          array.push('%');
          screenInput.value += result.textContent;
          result.textContent = '';
      });
      break;
      case buttonsList[3]: // DIVIDE
      item.addEventListener('click', () => {
        // Prevent the array to store more than two elements
        if (array.length > 1) {
          return;
        }
        // Do not trigger the button when the result screen is empty
        if (result.textContent.charAt(0) === '') {
          return;
        }
        array.push(result.textContent);
          result.textContent += '/';
          array.push('/');
          screenInput.value += result.textContent;
          result.textContent = '';
      });
      break;
      case buttonsList[4]: // MULTIPLY
      item.addEventListener('click', () => {
        // Prevent the array to store more than two elements
        if (array.length > 1) {
          return;
        }
        // Do not trigger the button when the result screen is empty
        if (result.textContent.charAt(0) === '') {
          return;
        }
        array.push(result.textContent);
          result.textContent += '✕';
          array.push('*');
          screenInput.value += result.textContent;
          result.textContent = '';
      });
      break;
      case buttonsList[5]: // SUBSTRACT
        item.addEventListener('click', () => {
          // Prevent the array to store more than two elements
          if (array.length > 1) {
            return;
          }
          // Do not trigger the button when the result screen is empty
          if (result.textContent.charAt(0) === '') {
            return;
          }
          array.push(result.textContent);
          result.textContent += '—';
          array.push('-');
          screenInput.value += result.textContent;
          result.textContent = '';
        });
      break;
      case buttonsList[6]: // ADD
      item.addEventListener('click', () => {
        // Prevent the array to store more than two elements
        if (array.length > 1) {
          return;
        }
        // Do not trigger the button when the result screen is empty
        if (result.textContent.charAt(0) === '') {
          return;
        }
        array.push(result.textContent);
        result.textContent += '+';
        array.push('+');
        screenInput.value += result.textContent;
        result.textContent = '';
      });
      break;
      case buttonsList[7]: // NUMBER 7
      item.addEventListener('click', () => {
        result.textContent += 7;
      });
      break;
      case buttonsList[8]: // NUMBER 8
      item.addEventListener('click', () => {
        result.textContent += 8;
      });
      break;
      case buttonsList[9]: // NUMBER 9
      item.addEventListener('click', () => {
        result.textContent += 9;
      });
      break;
      case buttonsList[10]: // NUMBER 4
      item.addEventListener('click', () => {
        result.textContent += 4;
      });
      break;
      case buttonsList[11]: // NUMBER 5
      item.addEventListener('click', () => {
        result.textContent += 5;
      });
      break;
      case buttonsList[12]: // NUMBER 6
      item.addEventListener('click', () => {
        result.textContent += 6;
      });
      break;
      case buttonsList[13]: // NUMBER 1
        item.addEventListener('click', () => {
          result.textContent += 1;
        });
      break;
      case buttonsList[14]: // NUMBER 2
        item.addEventListener('click', () => {
          result.textContent += 2;
        });
      break;
      case buttonsList[15]: // NUMBER 3
        item.addEventListener('click', () => {
          result.textContent += 3;
        });
      break;
      case buttonsList[16]: // NEGATIVE
        item.addEventListener('click', () => {
          if (result.textContent.charAt(0) === '') {
            return;
          }
          result.textContent *= -1;
        });
      break;
      case buttonsList[17]: // NUMBER 0
      item.addEventListener('click', () => {
        result.textContent += 0;
      });
      break;
      case buttonsList[18]: // DOT
      item.addEventListener('click', () => {
        if (result.textContent.charAt(0) === '') {
          return;
        }
        result.textContent += '.';
      });
      break;
      case buttonsList[19]: // EQUAL
        item.addEventListener('click', () => {
          // Trigger the operation based on the current operator in the array
          switch (true) {
            case (array.includes('+')):
              getAddition(array);
              array = []; // Empty the array everytime the operation has finished
            break;
            case (array.includes('-')):
              getsubstraction(array);
              array = [];
            break;
            case (array.includes('*')):
              getMultiplication(array);
              array = [];
            break;
            case (array.includes('/')):
              getDivision(array);
              array = [];
            break;
            case (array.includes('%')):
              getPercentage(array);
              array = [];
            break;
            case (array.includes('**')):
              getExponentiation(array);
              array = [];
            break;
          }
        });
      break;
    }
  });
}