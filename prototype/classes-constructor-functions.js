class Person {
  name = "pavan";
  age = 22;

  greet() {
    console.log(`Hey ${this.name} you are ${this.age} years old`);
  }
}

const person = new Person();
person.greet();

// Above code can be written using function constructors
function Person1() {
  this.name = "John";
  this.age = 21;
  this.greet = function() {
    console.log(`Hey ${this.name} you are ${this.age} years old`);
  }
}

const person1 = new Person1();
person1.greet();