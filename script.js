const calculator = {
    displayValue: '0',
    firstOperand: '',
    secondOperand: '',
    operator: null,
    waitingForSecondOperand: false,
};

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
// console.log(divide(24, 12));

function operate(operator, firstOperand, secondOperand) {
    if (operator === '+') return add(firstOperand, secondOperand);
    if (operator === '-') return subtract(firstOperand, secondOperand);
    if (operator === '*') return multiply(firstOperand, secondOperand);
    if (operator === '/') return divide(firstOperand, secondOperand);
};
// console.log(operate('/', 24, 12));