function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a+b+c)
    }
  }
}
console.log(sum(5)(12)(80));

function performCalculation(calculationType) {
  return function(number1) {
    return function (number2) {
      if(calculationType === "add") return number1+number2;
      else if(calculationType === "subtract") return number1-number2;
      else if(calculationType === "multiply") return number1*number2;
      else if(calculationType === "devide") return number1/number2;
    }
  }
}

const result = performCalculation("add")(12)(48);
console.log("result", result);

// For reusabaility you can do this
const mul = performCalculation("multiply");
console.log(mul(10)(20)); // you can call n number of times without declaring one more variable
console.log(mul(10)(20));