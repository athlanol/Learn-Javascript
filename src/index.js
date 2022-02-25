fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("rejected", err));
