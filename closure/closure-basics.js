function makeFunc() {
 var name = "Mozilla";
 function displayName(num) {
  console.log(name, num)
 }
 return displayName;
}

console.log(name);

// Examples of closure scope