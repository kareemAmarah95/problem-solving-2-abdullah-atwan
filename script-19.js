let num = 1; //<= try assigning a value to the variable num

function MathPow(num) {
  console.log(Math.pow(num, 2));
  return Math.pow(num, 2);
}

function squared() {
  return Math.pow(MathPow(num), 2);
}

console.log(squared());
