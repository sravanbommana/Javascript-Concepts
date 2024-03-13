function find(index) {
  let a = [];
  for (let i=0; i<1000000; i++) {
    a[i] = i * i;
  }

  return function() {
    console.log(a[index]);
  }
}

const sam = find(10);

console.time("10");
sam(10);
console.timeEnd("10");

