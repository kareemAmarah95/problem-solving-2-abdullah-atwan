let num = 0;
(minNum = 0), (maxNum = 0);
minNum = 10;
maxNum = 50;
num; //try assigning a value to this variable
num =
  num >= minNum && num <= maxNum
    ? `num is in the range
     and it's correct , your guess is right `
    : `num isn't in the range and it's incorrect , your guess is wrong , please try again .`;
console.log(num);
