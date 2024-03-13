const companies= [
  {name:"Google", city: "Montain View"},
  {name: "Facebook", city:"Melno Park"},
  {name: "Uber", city:"San Francisco"}
]

// Print Mountain View from above object using destructure 

const [{city}] = companies;
console.log("City", city)

const Google = {
  locations: ['San Francisco', 'New York', 'London']
}

// Print San Francisco using destructure

const {locations:[city1]} = Google;
console.log(city1)