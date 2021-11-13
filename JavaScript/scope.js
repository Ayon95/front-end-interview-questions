// global scope
const globalVariable = "I am global";

// block scope
{
  const blockVariable = "I am block-scoped";
}

function add(a, b) {
  // function scope
  // parameter a, b and variable sum can only be accessed within this function
  const sum = a + b;
  console.log(`Sum of ${a} and ${b} is ${sum}`);
  // globalVariable can be accessed anywhere
  // it is not present in the function scope so JS looks up in the scope chain
  // it finds the variable in the global scope
  console.log(globalVariable);
}

add(10, 20);

// these will throw an error
console.log(sum);
console.log(blockVariable);
