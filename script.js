const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

const firstOperand = document.querySelector(".firstOperand")
const operator = document.querySelector(".operator")
const secondOperand = document.querySelector(".secondOperand")


function updateOperands(value){
    if (operator.textContent == ""){
        firstOperand.textContent += value;
    } else {
        secondOperand.textContent += value;
    }
}

function updateOperator(value){
    if (firstOperand.textContent ==""){
        return
    }
    if (operator.textContent == ("+") || operator.textContent ==("-") 
        || operator.textContent =="*" || operator.textContent=="/") {
        return;
    } else {
        operator.textContent += value;
    }
    console.log(operator.textContent)
}

//Click on number -> number gets added as operand to display
numberButtons.forEach(button => {   
    button.addEventListener('click', event => {
        updateOperands(button.textContent)
    })
})

operatorButtons.forEach(button => {   
    button.addEventListener('click', event => {
        updateOperator(button.textContent)
    })
})

//TODO FRIDAY:
/* 
*make equalsbutton visible
*equalsbtn grab in JS 
*add functionality to equalsbtn (make sure it does nothing when there is no operator yet)
*change textcontent resultscrn to result of operate 



*/


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
function operate (numOne, func, numTwo){
    switch(func) {
        case '+':
            return add(numOne, numTwo)
        case '-':
            return subtract(numOne, numTwo)
        case '*':
            return multiply(numOne, numTwo)
        case '/':
            //divide by 0 = nothing
            if (numTwo ===0 ) return "UH-OH";
            else return divide(numOne, numTwo)
        default:
            return null;
    }
}





var displayVar = document.getElementsByClassName('.operationScreen')
let updateOperands = (number) => {
    
    displayVar.textContent += number
    console.log(displayVar)
}  */

/* 
            1. Inital screen display is 0
			2. replace initial display with user input if number is pressed
			3. else concat with operator
			4. if screen display is anything other than number concat the display

             */
//display value array
//fn to push number into displayVar array 

//Listen for clicks on btns 
//add number to displayVar

//store value of buttons in const WHEN CLICKED


