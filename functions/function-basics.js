// Define fuction
function sum(a,b ) {
  console.log(a+b);
}

// Write function expression
// when you assign anonymous function to some variable it's called as function expression
const tot = function (a,b) {
  console.log(a+b);
}

// waht is first class function

// First-class functions when functions in that language are treated like any other variable. For example, in such a 
//language, a function can be passed as an argument to other functions, can be returned by another function and can be 
//assigned as a value to a variable.

const squreNumber = (number) => {
  return number * number;
}

const displaySquare = (fn) => {
  console.log("Result of squaring it", fn(5));
}

displaySquare(squreNumber)