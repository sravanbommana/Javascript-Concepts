// Calsses are executed in strict mode
//Classes can not be hoisted

class Demo {
  constructor(name,age,city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet(name) {
    consol.log("welecome " + name)
  }
}