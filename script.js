const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsBtn = document.querySelector('.equalsBtn')
const clearBtn = document.querySelector('.clearBtn')
var result = document.querySelector('.resultScreen')
let operationScreen = document.querySelector('.operationScreen')

const firstOperand = document.querySelector(".firstOperand")
const operator = document.querySelector(".operator")
const secondOperand = document.querySelector(".secondOperand")
const newOperatorDiv = document.querySelector(".newOperator")

var operVar = ""

function updateOperands(value){
    if (operator.textContent == ""){
        firstOperand.textContent += value;
    }
    else {
        secondOperand.textContent += value;
    } 
    
    
}
function addMoreOperands (value){
        const newOperand = document.createElement("div");
        newOperand.classList.add('newOperand');
        newOperand.textContent += value; 
        document.querySelector('#operationScreen').appendChild(newOperand);

    };

function updateOperator(value){
    if (firstOperand.textContent ==""){
        return;
    }
   /*  if ((operator.textContent == ("+") || operator.textContent ==("-") 
        || operator.textContent =="*" || operator.textContent=="/") && secondOperand.textContent != ""){
        return;
     }  */


    if (secondOperand.textContent != "")  
    // add new DOM element after secondoperand for the newOperator 
    {
        const newOperator = document.createElement("div")
        newOperator.classList.add('newOperator');
        newOperator.textContent += value; 
        document.querySelector('#operationScreen').appendChild(newOperator);
      
       
       
        /* *users should be able to string several operations and get the right answer
        with each pair of numbers evaluated at a time
        --> SecondOPERAND should also check if there is a "newoperator" already and 
        append a new 
        div with the 3+ OPERANDs ! */
    }
    else {
        operator.textContent += value;
    }
    console.log(operator.textContent)
}

// When a operator is pressed; but there is already another operator loaded; 
//first run the calculate on existing pairs; then use the result for the new pair with clicked calculator! 

function operateCurrentPair() {
    if (operVar == ""){
        // every time we click a button, check if 
        firstOperand.textContent;
    }
    else {
        return
    }
}
//Click on number -> number gets added as operand to display
numberButtons.forEach(button => {   
    button.addEventListener('click', event => {
     operateCurrentPair();
        /*         //check if there is a 2nd operator

        if (document.querySelector(".newOperator")){
            addMoreOperands();
        } else { */
            updateOperands(button.textContent) }
    })

operatorButtons.forEach(button => {   
    button.addEventListener('click', event => {
        updateOperator(button.textContent)
    })
})

equalsBtn.addEventListener('click', event => {
    //if screen is empty do not run
  /*   if(firstOperand = ""){
        return; 
    }else {  */
  /*      let firstOperand = numOne;
        let secondOperand = numTwo; 
      let   operator = func;  */
      

      let solution = operate (firstOperand.textContent, operator.textContent, secondOperand.textContent)
        result.textContent = solution 
        console.log (solution)
    })
/* }) */

clearBtn.addEventListener('click', event => {
    operationScreen.textContent="";
   /*  firstOperand.textContent ="";
    operator.textContent="";
    secondOperand.textContent="" */
    result.textContent ="0"; 
})
//TODO SATURDAY:
/* 
*users should be able to string several operations and get the right answer
with each pair of numbers evaluated at a time
--> SecondOPERAND should also check if there is a "newoperator" already and 
append a new 
div with the 3+ OPERANDs !

*Calc should not evaluate more than a single pair of numbers at a time!
µµ -- Should push the previously calculated pair to the screen and into the new calculated func

*Round answers with long decimals so they don't overflow the screen

*Pressing = before all numbers or an operator should do nothing  EVER

*pressing CLEAR should wipe out any existing data; make sure it's real fresh!

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
    let x = parseInt(numOne);
    let y = parseInt(numTwo);
    switch(func) {
        case '+':
            return add(x, y)
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




