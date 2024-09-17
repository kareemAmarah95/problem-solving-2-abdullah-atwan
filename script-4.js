let key, num;
num; // try assigning a value to this variable
key =
  num % 2 === 0
    ? `this is an EVEN number`
    : !num % 2 === 0
    ? `this is an ODD number`
    : `please insert a Valid number`;
console.log(key);
switch (key) {
  case num:
    console.log(`${num}`);
    break;
}
