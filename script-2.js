const carsArr = ["toyota", "ford", "honda"];
switch (prompt("what is your favorite car ?")) {
  case "toyota":
    console.log(`${carsArr[0]} is my favorite car`);
    break;
  case "ford":
    console.log(`${carsArr[1]} is my favorite car`);
    break;
  case "honda":
    console.log(`${carsArr[2]} is my favorite car`);
    break;

  default:
    console.log(`please insert a valid car name`);

    break;
}
