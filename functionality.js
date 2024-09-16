const number1 = document.getElementById("one");
const number2 = document.getElementById("two");
const number3 = document.getElementById("three");
const number4 = document.getElementById("four");
const number5 = document.getElementById("five");
const number6 = document.getElementById("six");
const number7 = document.getElementById("seven");
const number8 = document.getElementById("eight");
const number9 = document.getElementById("nine");
const clear = document.getElementById("clear")
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const equals = document.getElementById("equals");

const calculatorDiv = document.getElementById("container");
const audio = document.getElementById("audio-player");
const firstDiv = document.getElementsByClassName("first-div")[0];

let display = document.getElementById("display");

let currentInput = "";
let previousInput = "";
let result = 0;
let operation;

number1.addEventListener("click", () =>{
    currentInput += "1";
    display.value = currentInput;  
})
number2.addEventListener("click", () =>{
    currentInput += "2";
    display.value = currentInput;
})
number3.addEventListener("click", () =>{
    currentInput += "3";
    display.value = currentInput;
})
number4.addEventListener("click", () =>{
    currentInput += "4";
    display.value = currentInput;
})
number5.addEventListener("click", () =>{
    currentInput += "5";
    display.value = currentInput;
})
number6.addEventListener("click", () =>{
    currentInput += "6";
    display.value = currentInput;
})
number7.addEventListener("click", () =>{
    currentInput += "7";
    display.value = currentInput;
})
number8.addEventListener("click", () =>{
    currentInput += "8";
    display.value = currentInput;
})
number9.addEventListener("click", () =>{
    currentInput += "9";
    display.value = currentInput;
})
clear.addEventListener("click", () =>{
    currentInput = "";
    display.value = currentInput;
})

addition.addEventListener("click", () => {
    previousInput = currentInput;
    currentInput ="";
    display.value = "+";
    operation = "+";
})
subtraction.addEventListener("click", () => {
    previousInput = currentInput;
    currentInput ="";
    display.value = "-";
    operation = "-";
})
division.addEventListener("click", () => {
    previousInput = currentInput;
    currentInput ="";
    display.value = "/";
    operation = "/";
})
multiplication.addEventListener("click", () => {
    previousInput = currentInput;
    currentInput ="";
    display.value = "*";
    operation = "*";
})

equals.addEventListener("click", () =>{

    audio.play();
    calculatorDiv.style.display = "none";
    firstDiv.style.display ="block";
    if (operation === "+"){
        result = parseFloat(previousInput) + parseFloat(currentInput);
    }
    if (operation === "-"){
        result = parseFloat(previousInput) - parseFloat(currentInput);
    }
    if (operation === "/"){
        result = parseFloat(previousInput) / parseFloat(currentInput);
    }
    if (operation === "*"){
        result = parseFloat(previousInput) * parseFloat(currentInput);
    }
    display.value = result;
    currentInput = result.toString();
});