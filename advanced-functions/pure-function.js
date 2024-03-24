// Pure function is a function, for a given input it always return the same input

// this is pure function because it doesn't change anything and will give same output
function add(num1, num2) {
  return num1+num2;
}

const result = add(10,44);

// This is impure function because on every page load Math.random value will change
//and result won't be same every time
function addRandom(num1) {
  return num1 + Math.random
}

let previousResult = 0;

function impure(num1, num2) {
  const sum = num1 + num2;
  // Here you are changing outside variable hence it's not condired as pure function
  previousResult = sum;
  return sum;
}