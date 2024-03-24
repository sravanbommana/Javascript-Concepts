const axios = require('axios');

const apis = [
  axios.get('https://dummyjson.com/products'),
  axios.get('https://dummy.com/carts/1')
]

function makeApiRequests() {
  Promise.all(apis).then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
}
makeApiRequests();