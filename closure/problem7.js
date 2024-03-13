// Closures in Javascript

//Ques 7: Make this run only once

let view;
let test = function likeTheVideo() {
  let called = 0;
  return function () {
    if(called > 0) {
      console.log("You already subscribed to channel")
    } else {
      view = "Roadside coder";
      console.log("Subscribe to", view);
      called++;
    }
  }
}

test();
test();
test();
