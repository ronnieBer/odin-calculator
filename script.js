const calculator = {
    displayValue: '0',
    firstOperand: '',
    secondOperand: '',
    operator: null,
    waitingForSecondOperand: false,
};

const previousDisplay = document.querySelector('.previous-display');

function inputNumber(number) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = number;
        calculator.secondOperand = parseFloat(calculator.displayValue);
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
        calculator.secondOperand = parseFloat(calculator.displayValue);
    };
    console.log(calculator);
};

function inputDecimal(point) {
    if (!calculator.displayValue.includes(point)) {
        calculator.displayValue += point;
    };
};

function handleOperator(newOperator) {
    const { firstOperand, secondOperand, displayValue, operator, waitingForSecondOperand } = calculator;
    const inputValue = parseFloat(displayValue);
    const previousValue = parseFloat(firstOperand);
    const currentValue = parseFloat(secondOperand);

    if (displayValue === '0') return;

    if (operator && waitingForSecondOperand) {
        calculator.operator = newOperator;
    };

    if (firstOperand === '' && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (secondOperand === '' && !isNaN(inputValue)) {
        calculator.secondOperand = inputValue;
    } else if (operator) {
        const result = operate(operator, previousValue, currentValue);

        calculator.displayValue = `${parseFloat(result)}`;
        calculator.firstOperand = `${parseFloat(result)}`;
    };

    calculator.waitingForSecondOperand = true;
    calculator.secondOperand = '';
    calculator.operator = newOperator;
    previousDisplay.innerText = `${calculator.firstOperand} ${calculator.operator}`;

    console.log(calculator);
};

function evalOperator() {
    const { firstOperand, secondOperand, operator, waitingForSecondOperand } = calculator;
    const previousValue = parseFloat(firstOperand);
    const currentValue = parseFloat(secondOperand);
    const result = operate(operator, previousValue, currentValue);

    if (operator === null || waitingForSecondOperand) return;

    calculator.displayValue = `${parseFloat(result)}`;
    previousDisplay.innerText = `${calculator.firstOperand} ${calculator.operator} ${calculator.secondOperand} =`;
    calculator.waitingForSecondOperand = false;
    //Bug to fix (after evaluation the input number append to the previous number);

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
    if (operator === '×') return multiply(firstOperand, secondOperand);
    if (operator === '÷') return divide(firstOperand, secondOperand);
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
        if (key.classList.value === 'operator') handleOperator(key.value); // console.log(key.value);
        if (key.classList.value === 'decimal') inputDecimal(key.value); // console.log(key.value);
        if (key.classList.value === 'eval-operator') evalOperator(); // console.log(key.value);
        if (key.classList.value === 'all-clear') console.log(key.value);
        if (key.classList.value === 'delete') console.log(key.value);
        if (key.classList.value === 'percent') console.log(key.value);
        if (key.classList.value === 'sign') console.log(key.value);
        updateDisplay();
    });
});