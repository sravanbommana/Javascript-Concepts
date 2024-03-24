const employee = {
  name: "Sravan",
  id: 21,
  city: "Hyderabad"
}

// Approach 1: use Object.keys to iterate over keys
const keys = Object.keys(employee);
console.log("Printing using object.keys");
keys.forEach(key => console.log(key, employee[key]))

// Approach 2: use Object.values to iterate over values
console.log("Printing using object.values");
const values = Object.values(employee);
values.forEach((empl) => console.log(empl))

// Approach 3: use Object.entries to iterate over both keys and values
console.log("Printing using object.entries");
const entries = Object.entries(employee);
entries.forEach(([key, value]) => console.log(key, value));

// Approach 4: use for in loop
console.log("Printing using for in loop");
for(let key in employee) {
  console.log(key, employee[key])
}