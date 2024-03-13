
// What is the oputput
function a() {
  for(var i=0; i<3; i++ ){
    setTimeout(function log() {
      console.log(i);
    }, i * 1000)
  }
}

// a();

// If i decalred using var then output will be 3 3 3
// If i decalred using let then output will be 0 1 2

// We can acheve using closure

function b() {
  for(var i=0; i<3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, i * 1000)
    }
    inner(i);
  }
}

b();
