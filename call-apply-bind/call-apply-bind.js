var obj = { name: "sravan"};

function sayHello(age, profession) {
  return `Hello ${this.name} is ${age} and is an ${profession}`
}

const str = sayHello.call(obj, 12, "kid");
console.log(str)