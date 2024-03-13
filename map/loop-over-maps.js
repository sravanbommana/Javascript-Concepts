const map = new Map();
const collection = ["Name", "age"]
map.set(1, "tst");
map.set(collection, "array")
.set("city", "Hyderabad")
.set(true, "IS Valid");

for(let [key, value] of map) {
  console.log(key, value)
}