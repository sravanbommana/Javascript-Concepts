function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getInfo = function() {
  console.log(`Hi ${this.name}, you are ${this.age} years old`);
}

//This is child 
function Employee(name, age, salary) {
  // Here Employee is inheriting properties from Person
  Person.call(this, name, age);
  this.salary = salary;
}
// Here we are extending employee prototype with person prototype, so that it have an access to person proto methods
Employee.prototype = Person.prototype;
Employee.prototype.getSalaryInfo = function() {
  console.log(`Hi ${this.name}, you are ${this.salary} years old`);

}
const emp = new Employee("Sravan", 33, 3800000);
emp.getInfo();