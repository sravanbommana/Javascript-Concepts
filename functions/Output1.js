var x = 21;
var fun = () => {
  console.log(x); // Because in this scope var x is declared so 
  var x = 20;
}

fun(); // Output: undefined