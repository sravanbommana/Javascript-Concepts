//Weekset have only three methods, it's used when the data is no longer needed
// and you wanto to release the data for garbage collector
let person = { name: "Sravan"}
const persons = new WeakSet();
persons.add(person);
persons.has(person)
