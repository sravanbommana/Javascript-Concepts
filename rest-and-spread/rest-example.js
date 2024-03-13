const asianCountries = ["India", "China", "Russia", "Sri Lanka", "Singapore"];
const africanCountries = ["South Africa", "Uganda"];


const [country1, country2, ...rest] = asianCountries;
console.log("Other Countries", rest);

// Output: Other Countries [ 'Russia', 'Sri Lanka', 'Singapore' ]

const data = {
  productName: "iphone",
  category: "mobile",
  price: 90_0000
}

// Output: otherData { category: 'mobile', price: 900000 }
const { productName, ...otherData} = data;
console.log("otherData", otherData);
