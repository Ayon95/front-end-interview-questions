let a = {
  name: "John",
  age: 25,
};

// both a and b point to the same memory address that holds a reference to the object
let b = a;
// changing a will also change b since they have a reference to the same object in the heap
a.name = "Mark";

console.log(a);
console.log(b);
