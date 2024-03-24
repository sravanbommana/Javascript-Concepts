class Student {
  constructor(name, marks, grade) {
    this.marks = marks;
    this.name= name;
    this.grade = grade;
  }
  set setGrade(grade) {
    this.grade = grade
  }
  get getGrade() {
    return this.grade
  }
}

const student = new Student("Raju", 98, 'A');
console.log(student.getGrade);
student.setGrade = 'S'
console.log(student.getGrade);
