const listOfCities = ["Hyderabad", "Chennai", "Bengaluru", "Pune", "Nagpur"]

// Destructure array (Order Matters)

const [city1, city2, city3] = listOfCities;
console.log("city1", city1);
console.log("city2", city2);
console.log("city3", city3);

// this will only copy Hyderabd and Benagaluru and will skip chennai due to comma provided below
const [cityName1, , cityName2] = listOfCities;
console.log(cityName1, cityName2);
