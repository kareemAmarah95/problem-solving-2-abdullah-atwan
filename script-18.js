let firstName = "Kareem";

const alpha = function alpha() {
  return firstName.split(" ").map((elem) => {
    return elem.toUpperCase();
  });
};
function upperCasedLetters() {
  return alpha();
}

console.log(upperCasedLetters());
