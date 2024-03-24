//We can create object in 4 ways
// Appproach 1: We can create object with constuctor using function

function Vehicle(name, maker) {
 this.name = name;
 this.maker = maker;
}

const vehicle = new Vehicle("Camry", "Toyota");
console.log(vehicle.name)
