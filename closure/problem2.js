// Write a function that will allow you to do this
// var addSix = createBase(6);
// addSix(10);
// addSix(18);

const createBase = (externalNum) => {
  return function (num) {
    console.log(externalNum + num);
  };
};

const addSix = createBase(6);
addSix(14);
addSix(34)