const user = {
  name: "Sravan",
  greet() {
    return `Hello, ${this.name}`
  },
  farewell: () => {
    return `Goodbye, ${this.name}` // Here we are using arroe functions, this will point to parent scope
    //In this scenario, there is no parent so it will be point to window object
  }
}

console.log(user.greet());
console.log(user.farewell());

