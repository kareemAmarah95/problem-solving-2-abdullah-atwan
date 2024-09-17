let num; // try assigning a value to this variable
const isEvenOrOdd =
  num % 2 === 0
    ? `${num} is an EVEN number`
    : !num % 2 === 0
    ? `${num} is an ODD number`
    : `please insert a valid number`;
console.log(isEvenOrOdd);
