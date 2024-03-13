const clickHandler = () => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        console.log(xhr.status, xhr.statusText)
        reject(xhr.statusText);
      }
    };
  });

  promise
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
