function makeUser() {
  return {
    name: "John",
    ref1() {
      return this; // this will point current context, that is object
    },
    ref: this // Here this refers to the paraent context, we are calling makeUser from global context, 
    // so here this refers to global context
  }
}

let user = makeUser();
console.log(user.ref1().name)