// Always create set using new Set
const set = new Set(["Ravi", "Ram", "Sita", "Raghu"]);

// We can't use index to access the  set element
// Set can't have duplicate elements
// 1. check whether set has an element
set.has(1) // true

// add elememts to set
set.add("John");

//delete elements
if(set.has("Ravi")) {
  set.delete("Ravi");
}

for (const entry of set.values()) {
  console.log(entry)
}


