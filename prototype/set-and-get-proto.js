const course = {
  title: 'Javascript - The complete guide',
  rating: 5
}

Object.setPrototypeOf(course, {
  printRating: function() {
    console.log(`${this.rating}`);
  }
});

console.log(Object.getPrototypeOf(course))
course.printRating();