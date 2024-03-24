//Weekmap have only 4 methods, it's used when the data is no longer needed
// and you wanto to release the data for garbage collector
let person = { name: "Sravan"}
const personsData = new WeakMap();
personsData.set(person, "extra info")
