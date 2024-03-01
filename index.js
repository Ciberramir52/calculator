let firstNumber = "0";
let secondNumber = "0";
let operator = "";
let temporalNumber = "0";

const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const zeroButton = document.querySelector('#zero');
const dotButton = document.querySelector('#dot');

const addButton = document.querySelector('#add');
const substractButton = document.querySelector('#substract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equal');
const ACButton = document.querySelector('#ac');
const posNegButton = document.querySelector('#pos-neg');

const screen = document.querySelector('#screen');

oneButton.addEventListener('click', () => numberPressed('1'));
twoButton.addEventListener('click', () => numberPressed('2'));
threeButton.addEventListener('click', () => numberPressed('3'));
fourButton.addEventListener('click', () => numberPressed('4'));
fiveButton.addEventListener('click', () => numberPressed('5'));
sixButton.addEventListener('click', () => numberPressed('6'));
sevenButton.addEventListener('click', () => numberPressed('7'));
eightButton.addEventListener('click', () => numberPressed('8'));
nineButton.addEventListener('click', () => numberPressed('9'));
zeroButton.addEventListener('click', () => numberPressed('0'));
dotButton.addEventListener('click', () => numberPressed('.'));

addButton.addEventListener('click', () => operatorPressed('+'));
substractButton.addEventListener('click', () => operatorPressed('-'));
multiplyButton.addEventListener('click', () => operatorPressed('x'));
divideButton.addEventListener('click', () => operatorPressed('÷'));
equalButton.addEventListener('click', () => result());
ACButton.addEventListener('click', () => clearScreen());
posNegButton.addEventListener('click', () => makeNegative());

const add = (a, b) => {
    return a + b;
}

const substract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) return NaN;
    return a / b;
}

const operate = (op, a, b) => {
    a = Number(a);
    b = Number(b);
    switch(op){
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        default:
            return a;
    }
}

const result = () => {
    secondNumber = screen.textContent;
    temporalNumber = operate(operator, firstNumber, secondNumber);
    screen.innerText = temporalNumber.toFixed(2);
    temporalNumber = "0";
    console.log(temporalNumber);
}

const numberPressed = (number) => {
    if (number === "0" && temporalNumber === "0") temporalNumber = "0";
    else if(temporalNumber === "0" && number !== ".") temporalNumber = number;
    else temporalNumber += number;
    screen.innerText = temporalNumber;
}

const operatorPressed = (op) => {
    operator = op;
    firstNumber = screen.textContent;
    temporalNumber = "0";
}

const clearScreen = () => {
    firstNumber = "0";
    secondNumber = "0";
    operator = "";
    temporalNumber = "0";
    screen.innerText = temporalNumber;
}

const makeNegative = () => {
    if (temporalNumber === "0") return;
    temporalNumber = "-" + temporalNumber;
    screen.innerText = temporalNumber;
}