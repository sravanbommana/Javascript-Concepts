// Every promise has it's own executor function, it will be executed immediately 
//when promise created


let promise = new Promise((resolve, reject) => {
  reject("OOPS error occured");
  resolve("Hey promise resolved")
});

promise.then((res) => {
  console.log("res", res);
}).catch((error) => {
  console.log(error)
})