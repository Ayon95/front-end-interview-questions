// Loose equality
// string 10 gets converted to number 10
console.log(10 == "10"); // true
// 1 gets converted to true and true = true is true
console.log(1 == true); // true
// 1 gets converted to true and true = false is false
console.log(1 == false); // false

// strict equality
console.log(10 === "10"); // false
console.log(1 === true); // false
console.log(10 === 10); // true
