let firstNumber = "";
let secondNumber = "";
let temporalNumber = "";

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



let num1, operator, num2;

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
    try {
        return a / b;
    } catch (err) {
        alert("Can't divide with 0");
    }
}

const operate = (op, a, b) => {
    switch(op){
        case "+":
            add(a, b);
            break;
        case "-":
            substract(a, b);
            break;
        case "x":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
        default:
            return a;
    }
}

const numberPressed = (number) => {
    if (number === "." && temporalNumber.length === 0) {
        temporalNumber = "0.";
        screen.innerText = temporalNumber;
        return;
    }
    if (number === "0" && temporalNumber.length === 0) return;
    temporalNumber += number;
    screen.innerText = temporalNumber;
}