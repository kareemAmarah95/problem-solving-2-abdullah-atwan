function diff(a, b) {
  return a >= b ? a - b : b >= a ? b - a : `please insert the max and min`;
}

function printDiff() {
  return diff(1, 2);
}

console.log(printDiff());
