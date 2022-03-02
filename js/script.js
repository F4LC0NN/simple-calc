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