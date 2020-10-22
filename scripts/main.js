function evaluate() {
    displayResult.innerText = eval(calculation);
    clearAllFunc()
}

function printCalculation(calcValue) {
    displayCalculation.value = calcValue;
}

function clearFunc() {
    calculation = calculation.substr(0, calculation.length-1);
    printCalculation(calculation);
}

function clearAllFunc() {
    calculation = '';
    displayCalculation.value = '';
}

const numbers = document.getElementsByClassName('num-button');
const operators = document.getElementsByClassName('operator');
const clears = document.getElementsByClassName('clear')
let displayCalculation = document.getElementById('calculation');
let displayResult = document.getElementById('result');

//Variable to put the calculation
let calculation = '';

//Add a EventListener, put numbers into calculation variable
for (let i = 0; i < 10; i++) {
    numbers[i].addEventListener('click', function () {
        for (let j = 0; j < 10; j++) {
            if (i === j) {
                calculation += numbers[j].innerText;
                printCalculation(calculation);
            }
        }
    })
}

for (let i = 0; i<operators.length; i++) {
    if (operators[i].innerText === '+') {
        operators[i].addEventListener('click', function() {
            if (calculation == '' || calculation.charAt(calculation.length-1) == '+') {
                return false;
            }
            calculation += operators[i].innerText;
            printCalculation(calculation);
        });
    } else if (operators[i].innerText === '-') {
        operators[i].addEventListener('click', function() {
            if (calculation.charAt(calculation.length-1) == '-') {
                return false;
            }
            calculation += operators[i].innerText;
            printCalculation(calculation);
        });
    } else if (operators[i].innerText === '*') {
        operators[i].addEventListener('click', function() {
            if (calculation == '' || calculation.charAt(calculation.length-1) == '*') {
                return false;
            }
            calculation += operators[i].innerText;
            printCalculation(calculation);
        });
    } else if (operators[i].innerText === '/') {
        operators[i].addEventListener('click', function() {
            if (calculation == '' || calculation.charAt(calculation.length-1) == '/') {
                return false;
            }
            calculation += '/';
            printCalculation(calculation);
        });
    }
}

operators.equal.addEventListener('click', evaluate);
clears.clearAll.addEventListener('click', clearAllFunc);
clears.clear.addEventListener('click', clearFunc);