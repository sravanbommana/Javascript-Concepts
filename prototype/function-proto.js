// prototype is used to add methods to constructor functions
// This will be only avaible for constructor function
function Employee() {
  this.name = "Pavan";
  this.age = 34;
  this.getInfo = function() {
    console.log(`Hey ${this.name} you are ${this.age} years old`);
  }
}

Employee.prototype.getSalary = function(salary) {
  console.log(`Hey ${this.name} you are earning ${salary} per month`);
};
const emp = new Employee();
emp.getSalary("250000");