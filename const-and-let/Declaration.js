// We can redeclare variables using var keyword
var num1;
var num1; // This will work

// We can't redeclare varibles using let and const
let num3
let num3 // This will throw error, cannot redeclare block-scoped variable

const num4; // const delarations must be initialized
const num4; // This will throw error, cannot redeclare block-scoped variable