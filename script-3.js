let key = +prompt(`what is your age ?`);
console.log(key);

key =
  key > 0 && key <= 1
    ? `you are Infant`
    : key >= 2 && key <= 4
    ? `you are Toddler`
    : key >= 5 && key <= 12
    ? `you are Child`
    : key >= 13 && key <= 19
    ? `you are Teen`
    : key >= 20 && key <= 39
    ? `you are an Adult`
    : key >= 40 && key <= 59
    ? `you are A Middle Age Adult`
    : key >= 60
    ? `you are a Senior Adult`
    : undefined;
switch (key) {
  case key:
    console.log(`${key} `);
    break;
  default:
    console.log(`please insert avalid number`);
    break;
}
