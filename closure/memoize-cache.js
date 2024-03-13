// Implement cache 

const calculate = () => {
  for(let i=0; i<1000000000; i++) {
  }
   return function print(a,b) {
    console.log(a+b);
   }
}

const cal = calculate();
console.time("10");
cal.print(10,5);
console.timeEnd("10");