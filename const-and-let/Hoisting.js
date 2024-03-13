
console.log(a) // Output: undefined, varibles are hoisted and assign values undefined 
var a;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b; // Hoisting will be done for let and const but they will be stored in temporial dead zone

// Temporial dead zone - this is the area created for storing let and const between declaration and initialization