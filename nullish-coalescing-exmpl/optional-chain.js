const employee = {
  name: "sravan",
  age: 21,
  city: "Hyderabad",
  address: {
    street: "Street One"
  }
}

//This will throw an error, because here we don't have dob in emloyee object
// hence the value will be undefined and then we are trying to access year on that undefined value
// We can use optional chain so that it will return undefined to dob without checking dob.year
const dob = employee?.dob?.year;

