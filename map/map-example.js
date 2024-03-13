const questionnaire = new Map();
const list = ["Raju", "Ravi"]
const countries = 
// Difference between object and map is object will only have string as Key
// where as map can have any data type as keys like arrays, numbers, strings, object

// set method will add data and reurn the set, so now you chain the sets

//Adding value to map
questionnaire.set("question1", "How are you")
.set(1, {name: "Test1"})
.set("list", list)
.set(true, 'You are correct')

console.log(questionnaire);

//Retreiving value map
console.log(questionnaire.get(true));

// check key is already exist
console.log(questionnaire.has("list"));

// Get the size of the map
console.log(questionnaire.size);

//Delete = Delete an entry in map with  agiven key
questionnaire.delete(1)

// Delete all entries
questionnaire.clear();



