const map = new Map();
const collection = ["Name", "age"]
map.set(1, "tst");
map.set(collection, "array")
.set("city", "Hyderabad")
.set(true, "IS Valid");

for(let [key, value] of map) {
  console.log(key, value)
}

//loop over keys and values
for(const [key, value] of map.entries()) {
  console.log(key, value)
}

//loop over keys 
for(const key of map.keys()) {
  console.log("Key", key)
}

//loop over values 
for(const value of map.values()) {
  console.log("value", value)
}