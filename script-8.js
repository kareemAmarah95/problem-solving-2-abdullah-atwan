let oneFahrenheit; // try assigning a value to this variable
const celsius =
  oneFahrenheit >= 32
    ? ((oneFahrenheit - 32) * 5) / 9
    : oneFahrenheit <= 32
    ? ((32 - oneFahrenheit) * 5) / 9
    : console.log(`Invalid Input`);
let finalNum = +(Math.round(celsius * 100) / 100).toFixed(2);

const val = finalNum >= 0 ? finalNum : null;
console.log(val);
