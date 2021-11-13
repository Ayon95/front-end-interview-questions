console.log(3 + "3"); // '33'
console.log(3 + "10"); // '310'
console.log(3 - "3"); // 0
console.log("10" - 3); // 7
console.log("23" > "15"); // true

const truthyValue = 10;
const falsyValue = 0; // '', 0, null, undefined, and NaN are falsy values
if (truthyValue) {
  console.log(truthyValue);
}

// falsy values get converted to false
if (falsyValue) {
  console.log(falsyValue);
}
