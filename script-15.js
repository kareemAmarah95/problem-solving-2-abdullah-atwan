async function fetchData() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Error: `, error);
  }
}

fetchData();

// console.log(data);
