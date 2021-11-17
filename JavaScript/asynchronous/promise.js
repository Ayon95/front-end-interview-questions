// promises are used to handle asynchronous tasks, e.g. fetching data from an API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
