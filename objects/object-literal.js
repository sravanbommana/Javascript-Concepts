let car = {
  name : 'GT',
  maker : 'BMW',
  engine : '1998cc'
};

car.brakesType = 'All Disc';

// Adding method stop() later to the object
car.stop = function() {
  console.log('Applying Brake...');  
}
// Property accessor
console.log(car.name); //dot notation
console.log(car['maker']); //bracket notation