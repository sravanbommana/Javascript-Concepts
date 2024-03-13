// What is modular pattern ? 
 var Module = (function() {
  function privateMethod() {
    console.log("Private");
  }

  function publicMethod() {
    console.log("Public Method")
  }

  return {
    publicMethod
  }
 })();

 Module.publicMethod();
 //Module.privateMethod();
