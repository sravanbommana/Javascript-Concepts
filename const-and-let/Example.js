// This is global scope
var title = "Welecome to Scopes"
{
  // This is also global scope, if you declare any variable with var it will be global scope
  // Means you can access it anywhere in the file
  var title2 = "test"
}

{
  let city = "Hyderabad";
  const gender = "male"
}

// Below two lines will throw errors
// Let and Cosnt are block scopes you can only access them within blocks
console.log("city", city);
console.log("gender", gender);