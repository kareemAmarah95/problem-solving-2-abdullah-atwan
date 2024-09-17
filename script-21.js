// let min = 1,
//   max = 20;
function getEven(min, max) {
  for (let min = 1; min <= 20; min++) {
    if (min % 2 === 0) {
      console.log(`${min} is an even number`);
    }
  }
}

getEven(1, 20);
