/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

// let a = 5;
// let b = 4;
// let c = 3.2;

// console.log(`let a: ${a} (${typeof a})`);
// console.log(`let b: ${b} (${typeof b})`);
// console.log(`let c: ${c} (${typeof c})`);

// let result = a * b;

// console.log("Result: ", result);

var defaultColor = "purple";

function setColor() {
    if ( defaultColor === "purple" ) {
        let defaultColor = "orange";
    }
}

setColor();
console.log(defaultColor);
let sum = 23.95;
let tip = "3";

console.log("The total is $" + sum + tip + ".");