// __proto__ is availble on every object including function 
const o = {
  a: 1,
  b: 2,
  __proto__: {
    b:3,
    c:4                             
  }
}

console.log(o.a); // 1
console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing
console.log(o.c); // 4
console.log(o.d); // undefined