const clickHandler = () => {
  console.log("Inside clickHandler");
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  request.send();

  request.addEventListener("load", function () {
    console.log(request.responseText);
  });
};
