function printDetails() {
  let name = "test1";
  console.log(name);
  if(true) {
    let name = "1234";
    console.log(name)
  }
}

printDetails();

// output: test1, 1234

// This is called shadowing, note this will happen only in the same scope

