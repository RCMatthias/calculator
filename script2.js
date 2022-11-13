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

allMainButtons.disabled = true;





//Clicking a number adds its value to screen
numberButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        screenPush(btn.textContent);
        lastAddedNumber += btn.textContent;
        operatorButtons.disabled=false; 
        enableOperator();
    })
})

//when press operator; 
operatorButtons.forEach(btn => {
    btn.addEventListener('click', Event => {

            if (operationArray.length < 1) {
                varPush(+(operationScreen.textContent), btn.textContent); 
                screenPush(btn.textContent)
                    console.table(operationArray)
                lastAddedNumber = "";
                
                disableOperator();
            } else {
                operationArray.push(+lastAddedNumber);
                    console.table(operationArray);
                let tempresult = tempCalculate(operationArray.at(1));
                result.textContent = tempresult.toFixed(2);
                operationArray.splice(0, 0, tempresult);
                    console.table(operationArray);
                screenPush(btn.textContent);

                operationArray.splice(1,1, btn.textContent);
                lastAddedNumber = "";

                disableOperator();
            };      

    }) ;       
})        




                                    /* 
                                    FUNCTION BANK

                                    */ 



function disableOperator() {
    document.querySelector('[data-operator="+"]').disabled=true;
    document.querySelector('[data-operator="-"]').disabled=true;
    document.querySelector('[data-operator="x"]').disabled=true;
    document.querySelector('[data-operator="/"]').disabled=true;
}

function enableOperator(){
    document.querySelector('[data-operator="+"]').disabled=false;
    document.querySelector('[data-operator="-"]').disabled=false;
    document.querySelector('[data-operator="x"]').disabled=false;
    document.querySelector('[data-operator="/"]').disabled=false;
}

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

//Operate function: takes an operator and 2 numbers and then calls one of math funcs
function calculate (numOne, func, numTwo){
    let x = parseInt(numOne);
    let y = parseInt(numTwo);
    switch(func) {
        case "+":
            return add(x, y)
        case "-":
            return subtract(x, y)
        case "*":
            return multiply(x, y)
        case "/":
            //divide by 0 = nothing
            if (x ===0 ) return "UH-OH";
            else return divide(x, y)
        default:
            return null;
    }
}

//tempCalculate() makes temporary calculation; using btn.textcontent as OPERATOR; using 2 numbers that are in array as operands
function tempCalculate(operator) {
    let numOne = operationArray.shift();
    let numTwo = operationArray.pop();
   return (calculate(numOne, operator, numTwo))
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
        clearAll();
    })

function clearAll() {
    operationScreen.textContent = "";
    result.textContent ="0";
    operationArray = [];
    console.log(operationArray)
    enableOperator(); 
}


//TODO: ADD FUNCTIONALITY FOR EXTRA OPERATIONS AFTER EQUALS! (push the result into the array [0]position)
//equalsBtn
equalsBtn.addEventListener('click', event => {
    equals();
/*     document.querySelector('[data-attribute="="]').disabled=true;
 */
});

function equals() {
    if(    !operationScreen.textContent ) {
        return
    } else {
        operationArray.push(lastAddedNumber);
        console.table(operationArray);
        disableOperator;
        let tempresult = tempCalculate(operationArray.at(1));
        let roundedResult = tempresult.toFixed(2);
        result.textContent = roundedResult;
        operationArray.splice(0, 0, roundedResult);
    }
};


