const employeeInfo = {
  name: "Sravan",
  age: 28,
  city:"Hyderabad"
}

const printEmployeeInfo = ({name, city}) => {
  console.log(`Hey ${name} you are from ${city}`);
}

printEmployeeInfo(employeeInfo)