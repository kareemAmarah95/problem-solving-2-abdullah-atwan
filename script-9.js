let Grade = 1, // try assigning the grade variable a number
  letterGrade = ["A", "B", "C", "D", "F"],
  gpa = ["4.0", "3.0", "2.0", "1.0", "0.0"];
percentage =
  Grade >= 90 && Grade <= 100
    ? `letter Grade = ${letterGrade[0]} and GPA = ${gpa[0]}`
    : Grade >= 80 && Grade <= 89
    ? `letter Grade =  ${letterGrade[1]}
    and GPA = ${gpa[1]}`
    : Grade >= 70 && Grade <= 79
    ? `letter Grade =  ${letterGrade[2]} and GPA = ${gpa[2]}`
    : Grade >= 60 && Grade <= 69
    ? `letter Grade = ${letterGrade[3]} and GPA = ${gpa[3]}`
    : Grade >= 0 && Grade <= 59
    ? `letter Grade = ${letterGrade[4]} and GPA = ${gpa[4]}`
    : `please enter a valid number`;

console.log(percentage);
