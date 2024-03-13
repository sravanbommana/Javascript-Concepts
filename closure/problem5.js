// How would you use a private counter

function counter() {
  var count = 0;

  function add(num) {
    count = count + num;
  }

  function getCount() {
    return count;
  }

  return {
    add,
    getCount
  }
}

const icounter = counter();
icounter.add(10);
icounter.add(25);

console.log(icounter.getCount())