const calculator = {
    displayValue: '0',
    firstOperand: '',
    secondOperand: '',
    operator: null,
    waitingForSecondOperand: false,
};

function inputNumber(number) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = number;
        calculator.waitingForSecondOperand = false;
    } else {
        if (displayValue === '0') {
            calculator.displayValue = number;
        } else {
            calculator.displayValue = displayValue + number;
        };
    };
    console.log(calculator);
};

function inputDecimal(point) {
    if (!calculator.displayValue.includes(point)) {
        calculator.displayValue += point;
    };
};

function handleOperator(newOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    };

    calculator.waitingForSecondOperand = true;
    calculator.operator = newOperator

    console.log(calculator);
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

function updateDisplay() {
    const display = document.querySelector('.current-display');

    display.innerText = calculator.displayValue;
};

updateDisplay();

const keys = document.querySelectorAll('button');
keys.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.classList.value === 'operand') inputNumber(key.value); // console.log(key.value);
        if (key.classList.value === 'operator') handleOperator(key.value) // console.log(key.value);
        if (key.classList.value === 'decimal') inputDecimal(key.value) // console.log(key.value);
        if (key.classList.value === 'eval-operator') console.log(key.value);
        if (key.classList.value === 'all-clear') console.log(key.value);
        if (key.classList.value === 'delete') console.log(key.value);
        if (key.classList.value === 'percent') console.log(key.value);
        if (key.classList.value === 'sign') console.log(key.value);
        updateDisplay();
    });
});