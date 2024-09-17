const person = (name, age, ...params) => {
  return `My name is ${name} and my age is ${age} years old and I love playing ${params} `;
};

console.log(person("kareem", 20, ["hookey ", "football ", " soccer"]));
