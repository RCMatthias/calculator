const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const allMainButtons = document.querySelectorAll('[data-number], [data-operator]')

const equalsBtn = document.querySelector('.equalsBtn')
const clearBtn = document.querySelector('.clearBtn')
var result = document.querySelector('.resultScreen')
let operationScreen = document.querySelector('.operationScreen')

var firstOperand = document.querySelector(".firstOperand")
var operator = document.querySelector(".operator")
var secondOperand = document.querySelector(".secondOperand")
const newOperatorDiv = document.querySelector(".newOperator")

let operationArray = []
let lastAddedNumber = ""


//Basic math operators
function add (numOne, numTwo) {
    return numOne + numTwo;
}
function subtract (numOne, numTwo) {
    return numOne - numTwo;
}
function multiply (numOne, numTwo) {
    return numOne * numTwo;
}
function divide (numOne, numTwo) {
    return numOne / numTwo;
}


//Operate function: takes an operator and 2 numbers and then calls one of 
//the math functions
function calculate (numOne, func, numTwo){
    let x = parseInt(numOne);
    let y = parseInt(numTwo);
    switch(func) {
        case "+":
            return add(x, y)
        case "-":
            return subtract(numOne, numTwo)
        case "*":
            return multiply(numOne, numTwo)
        case "/":
            //divide by 0 = nothing
            if (numTwo ===0 ) return "UH-OH";
            else return divide(numOne, numTwo)
        default:
            return null;
    }
}



//Clicking a number adds its value to screen
numberButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        screenPush(btn.textContent);
        lastAddedNumber += btn.textContent;
    })
})


//when press operator; 
//* add current number on screen to array
//* calculate IF there are 2 numbers in array
//* 
operatorButtons.forEach(btn => {
    btn.addEventListener('click', Event => {
    
            if (operationArray.length < 1) {
                varPush(+(operationScreen.textContent), btn.textContent); 
                screenPush(btn.textContent)
                console.table(operationArray)
                lastAddedNumber = "";
            } else {
                operationArray.push(+lastAddedNumber);
                console.table(operationArray);
                result.textcontent += (tempCalculate(btn.textContent));
                console.log(result)
            }
    })
})

//tempCalculate() makes temporary calculation; using btn.textcontent as OPERATOR; using 2 numbers
// in array as operands
function tempCalculate(operator) {
    let numOne = operationArray.shift();
    console.log(numOne);
    let numTwo = operationArray.at(1);
    calculate(numOne, operator, numTwo);
};

//screenPush() pushes the buttons value to the screen (FRONT)
function screenPush(value) {
        operationScreen.textContent += value; 
        return (operationScreen.textContent);
   }


//varPush() pushes the value to array  (BACK)
function varPush(value, value2) {
  operationArray.push(value, value2); 
 }


// When a operator is pressed; but there is already another operator loaded; 
//first run the calculate on existing pairs; then use the result for the new pair with clicked calculator! 

//clearAll()
clearBtn.addEventListener('click', event => {
        clearAll()
    })

function clearAll() {
    operationScreen.textContent = "";
    operationArray = [];
    console.log(operationArray)
}