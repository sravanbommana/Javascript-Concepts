// implement sum(2)(5)(10)(12)() using infinite currying

function sum(a) {
  return function(b) {
    if(b) return sum(a+b);
    return a;
  }
}

console.log("sum", sum(2)(12)(44)(65)());