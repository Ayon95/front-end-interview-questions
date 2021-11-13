// a points to the address in memory where 10 is stored
let a = 10;
// b points to a new address in memory where 10 is stored
// when a is assigned to b, a new memory spot is allocated for a copy of a's value
let b = a;
// a now points to a memory address that stores 20
a = 20;
console.log(`a is ${a}`); // 20
console.log(`b is ${b}`); // 10
