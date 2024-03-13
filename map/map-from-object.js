const customer = {
  name:"QWER",
  age: 21
}

// use object.entries to create array from object
const customerArray = Object.entries(customer);
console.log(customerArray);

// Pass that array to the constructor of map
const customerMap = new Map(customerArray);
console.log(customerMap);

// converting map into array
const newT = [...customerMap];
console.log(newT)

//converting map to array with only keys
const keyList = customerMap.keys();

//converting map to array with only values
const valueList = customerMap.values();

//converting map to array with only keys and values
const keyValueList = customerMap.entries();



