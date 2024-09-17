let num1, num2, num3;
(num1 = num1 >= num2 && num1 >= num3) ||
  (num2 = num2 >= num1 && num2 >= num3) ||
  (num3 = num3 >= num2 && num3 >= num1);

function greatest(num1, num2, num3) {
  return num1 >= num2 && num1 >= num3
    ? console.log(`${num1} is the greatest`)
    : num2 >= num3 && num2 >= num1
    ? console.log(`${num2} is the greatest`)
    : num3 >= num1 && num3 >= num2
    ? console.log(`${num3} is the greatest`)
    : console.log(`Invalid Number`);
}

console.log(greatest(3, 100, 6));
