const word = "password123";
let isCorrectPassword;
isCorrectPassword = word.toLowerCase("").split(" ").includes(word)
  ? console.log(`Correct Password`)
  : console.log(`Incorrect Password`);
