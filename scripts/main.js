function evaluate() {
    displayResult.innerText = eval(calculation);
    clearAllFunc()
}

function printCalculation(calcValue) {
    displayCalculation.value = calcValue;
}

//backspace
function clearFunc() {
    calculation = calculation.substr(0, calculation.length - 1);
    printCalculation(calculation);
}

function clearAllFunc() {
    calculation = '';
    displayCalculation.value = '';
}

function addOperator(indexIdButton) {
    //add only substract operator in start of calculation
    if (calculation === '' && operators[indexIdButton].id === 'sub') {
        calculation += '-';
        printCalculation(calculation);
    } else if (calculation !== '' && calculation.charAt(calculation.length - 1) !== operators[indexIdButton].innerText) {
        calculation += operators[indexIdButton].innerText;
        printCalculation(calculation);
    }
}

function addDot() {
    if (calculation.charAt(calculation.length - 1) !== '.') {
        if (calculation !== '' && Number(calculation.charAt(calculation.length - 1)) !== NaN) {
            calculation += '.';
            printCalculation(calculation);
        }
    }
}

// if the last char at calculation is an operation or dor
// fix the bug of sequence of diferent operators and dots
// function isOperatorOrDot() {}

const numbers = document.getElementsByClassName('num-button');
const operators = document.getElementsByClassName('operator');
const dot = document.getElementById('dot');
const clears = document.getElementsByClassName('clear')
const displayCalculation = document.getElementById('calculation');
const displayResult = document.getElementById('result');

//Variable to put the calculation
let calculation = '';

//Add a EventListener, put numbers into calculation variable
for (let i = 0; i < 10; i++) {
    numbers[i].addEventListener('click', function () {
        calculation += numbers[i].innerText;
        printCalculation(calculation);
    })
}

for (let i = 0; i < operators.length; i++) {
    if (operators[i].id === 'add') {
        operators[i].addEventListener('click', function () {
            addOperator(i);
        });
    } else if (operators[i].id === 'sub') {
        operators[i].addEventListener('click', function () {
            addOperator(i);
        });
    } else if (operators[i].id === 'mul') {
        operators[i].addEventListener('click', function () {
            addOperator(i);
        });
    } else if (operators[i].id === 'div') {
        operators[i].addEventListener('click', function () {
            addOperator(i);
        });
    }
}

operators.equal.addEventListener('click', evaluate);
clears.clearAll.addEventListener('click', clearAllFunc);
clears.clear.addEventListener('click', clearFunc);
dot.addEventListener('click', addDot);