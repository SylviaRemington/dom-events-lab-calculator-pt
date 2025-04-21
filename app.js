//This DOM Events Calculator Lab is for Tristan Hall's GA PT Software Engineering Class

/*-------------------------------- Constants --------------------------------*/
//FIRST will be to enable the calculator to select numbers on the calculator.
//Create a constant that captures all button inputs, selects the calculator, 
// and selects the display for next steps:
// e.g. const buttons = document.querySelectorAll('.button')

// Constants are variables that can’t be reassigned after they're set.
// e.g. const name = 'Pikachu';
// const is like a rule we set early on.
//Rules for code setting early on.

// #calculator -there is an id of 'calculator'
// .row - there are 4 classes of 'row'
// .button & .number- child of row, there are 2 classes of button and number for 12 values

// const  = 


// Delete 4 lines below once start coding - just ideas:
// Represent the buttons and numbers
// const buttons = document.querySelectorAll(".button")

// This verifies the button values are correct
// console.log(buttons)

//Also delete this below:
// const buttons = document.querySelectorAll('.button');
// const calculate = document.querySelector('.button.calculate');

/*-------------------------------- Variables --------------------------------*/

// Variables are names you use to store information in your code.
// e.g. let score = 100;

// let

let number = ''; //let the number be whatever it is
let inputNow = ''; //what the user is typing in now (e.g. the number 7)
let operatorChosen = '';//the math symbol they clicked (plus, minus, multiply, divide)
let resultingFinalAnswer= ''; //the final result after calculation performed
let clearingOut = ''; //when clearing the numbers to do a new calculation
// The values are empty strings ('') at the start because the user hasn’t done anything yet.


//Delete 2 lines below once start coding:
// To perform a calculation, we need to know what numbers and which operation
// let firstNumber = null

// Create some empty strings. Why create empty strings? Because...
// You start with an empty string ('') because:

// ✅ The user hasn’t typed anything yet
// You’re waiting for them to click number buttons like:

// 7 → now it’s '7'

// then 3 → becomes '73'

// then 1 → becomes '731'

// You're building the number digit by digit, just like someone typing on a calculator.








/*------------------------ Cached Element References ------------------------*/

// Cached element references just means saving DOM elements in a variable 
// so you don’t have to look them up again and again.
// e.g. const button = document.querySelector('.my-button');
//From Intro to the Dom, selecting an element section - "Caching elements
    // In the example above, we stored the result of document.querySelector('#main-title) 
    // to a variable (titleElement). We’ll commonly refer to that variable as a 
    // cached element reference. That sounds fancy, but it means that we don’t need to 
    // query the DOM repeatedly for the same element. When we want to interact with it, 
    // we use the variable."

    // Creating cached element references is a technique in which a DOM element is stored
    //  in a variable for future use, minimizing the need to query the DOM to access the 
    //  same element repeatedly. This phrase is derived from the term caching in 
    //  computer science. Caching is a technique used in computing to store data 
    //  temporarily in a local storage location, known as a cache, 
    //  so that future requests for that data can be accessed faster.

//     This is important for a few reasons:
    // We can write less code.
    // Querying for elements in the DOM is prone to errors. Doing it less avoids some of 
    // those errors. It improves performance (querying for elements in the DOM is 
    // relatively slow).

//I did this section first
const displayElement = document.querySelector('.display'); //telling the DOM to select the display, where the answers will pop out
console.log(displayElement);//verifying element selection is correct
console.dir(displayElement);

const buttonElements = document.querySelectorAll('.button'); //telling the DOM to find and select the button elements
console.log(buttonElements);
console.dir(buttonElements);

const numberButtonElements = document.querySelectorAll('.number'); //telling the DOM to find and select the buttons with numbers on them
console.log(numberButtonElements);
console.dir(numberButtonElements);

const operatorButtonsElements = document.querySelectorAll('.operator'); 
console.log(operatorButtonsElements);
console.dir(operatorButtonsElements);

const equalsButtonElement = document.querySelector('#equals');
console.log(equalsButtonElement);
console.dir(equalsButtonElement);

const clearButtonElement = document.querySelector('#clear');
console.dir(clearButtonElement);



/*----------------------------- Event Listeners -----------------------------*/

// Event listeners are ways to make your webpage react to 
// something—like a click, key press, or mouse move.
// e.g. 

// buttonElements.addEventListener('click', function() {
//     console.log('Button was clicked!');
//   });

// This below
// buttonElements.addEventListener('click', ()=> number 1 = value of number 1 function and then 
// do a function that adds - add num1 and num2 )


// Listening for button clicks

/*-------------------------------- Functions --------------------------------*/

// Functions are blocks of code you can reuse. They do a specific job when you call them.
// e.g. 
// function greet() {
//   console.log('Hello!');
// }
// greet(); 

//Delete this below
// This function takes 2 numbers and an operator, then calculates the total

// Functions/Actions that need to happen so that code and clicks can be read 



















// Older solves that didn't solve:
// const calculatorElement = document.querySelector('#calculator');
// console.dir(calculatorElement);

// const rowElement = document.querySelector('.row');
// console.dir(rowElement);

// const displayElement = document.querySelector('.display');
// console.dir(displayElement);

// const buttonElement = document.querySelector('.button');
// console.dir(buttonElement);

// const buttonNumberElement = document.querySelector('.button number')
// console.dir(buttonNumberElement); //console null msg -- because button and number are two separate classes, not one. Need '.' infront of number too.

// const buttonOperatorElement = document.querySelector('.button operator')
// console.dir(buttonNumberElement); ///console null msg -- because button and operator are two separate classes, not one. Need '.' infront of number too.

// const buttonEqualsElement = document.querySelector('.button equals')
// console.dir(buttonNumberElement); /console null msg




// IDEAS!!!! TO ADD!!! 
// Add something that says "kapow! Here's your number: " when you've pressed equals button.
