const getData = () => {
  const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    return response.json();
    console.log("response", response)
  })
  .catch((error) => {
    console.log("error", error)
  });
  console.log("data", data)
}

getData();