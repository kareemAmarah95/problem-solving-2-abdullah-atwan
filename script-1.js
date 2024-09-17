let min, value, minValInc, maxValInc; // try assigning a number to this variable
let max = (min += 9);

min = 1;
max = 10;
minValInc = min += 10; // 11
maxValInc = max += 10; // 20

const condition =
  (value >= 1 && value <= 10 && value > 0) ||
  (value >= ++minValInc && value <= ++maxValInc);
// ? console.log(`congratulations you entered a right number`)
// : console.log(`sorry ; you have entered a let min2,
let num = +true;
let minNum = Math.min((num += 1));
let maxNum = Math.max((num += 9));
num2 = 11;
switch (num2) {
  case 1:
    num2 = num2 >= ++minNum && num2 <= ++maxNum;
    console.log(`the number is in the range of the two numbers`);
    break;
  default:
    console.log(`wrong numbers`);
}
