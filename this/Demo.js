// This refers to current context
this.a = 5;
const getParam = () => {
  // Here this refers to window object
  console.log(this.a);
  console.log(this)
}

let self;
let user = {
  name: "Piyush",
  age: 24,
  getAge() {
    self = this;
    console.log("getAge", this.age)
  },
  childObj: {
    newName: 'Roadside Coder',
    getName() {
      console.log("Inside childObj", this.newName, self.age)
    }
  },
}
getParam();
user.getAge();
user.childObj.getName();