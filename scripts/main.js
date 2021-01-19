const operators = document.getElementsByClassName('operator');
const dot = document.getElementById('dot');
const clears = document.getElementsByClassName('clear')
const displayCalculation = document.getElementById('calculation');
const displayResult = document.getElementById('result');

let calculation = '';

window.document.addEventListener('click', event => {
    if (!event.target.classList.contains('num-button')) return;
    calculation += event.target.innerText;
    printCalculation(calculation);
})

function printCalculation(calcValue) {
    displayCalculation.value = calcValue;
}

window.document.addEventListener('click', event => {
    if (!event.target.classList.contains('operator')) return;
    addOperator(event.target);
})

function addOperator(eventTarget) {
    if (calculation === '' && eventTarget.id === 'sub') {
        calculation += '-';
        printCalculation(calculation);
    } else if (calculation !== '') {
        let lastChar = calculation.charAt(calculation.length - 1);
        let ops = '+-*/';
        if (!ops.includes(lastChar)) {
            calculation += eventTarget.innerText;
            printCalculation(calculation);
        }
    }
}

operators.equal.addEventListener('click', evaluate);
clears.clearAll.addEventListener('click', clearAllFunc);
clears.clear.addEventListener('click', clearFunc);
dot.addEventListener('click', addDot);

function evaluate() {
    displayResult.innerText = eval(calculation);
    clearAllFunc()
}

function clearFunc() {
    calculation = calculation.substr(0, calculation.length - 1);
    printCalculation(calculation);
}

function clearAllFunc() {
    calculation = '';
    displayCalculation.value = '';
}

function addDot() {
    let lastChar = calculation.charAt(calculation.length - 1);
    let ops = '+-*/';
    if (lastChar !== '.') {
        if (calculation !== '' && parseInt(lastChar) !== NaN) {
            if (!ops.includes(lastChar)) {
                calculation += '.';
                printCalculation(calculation);
            }
        }
    }
}