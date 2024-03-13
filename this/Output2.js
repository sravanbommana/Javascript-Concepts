
const user = {
  name: "Sravan",
  logMessage() {
    console.log(this.name)
  }
}

setTimeout(user.logMessage, 1000); // This will return undefined, because we r passing the function as callback it will refer 
//the global context. there is no name property in the global level so it will retun undefined

// Fix for the above issue
setTimeout(function() {
  user.logMessage(); // if we pass it inside the function then it will work
}, 1000);