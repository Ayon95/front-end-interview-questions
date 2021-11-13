// "use strict";
function sayHello() {
  console.log("Hello");
  console.log(this);
}

// sayHello is being called in the global scope, so its 'this' will point to the global object
// the global object is the owner of sayHello
// note that in strict mode, 'this' will be undefined
sayHello();

const car = {
  make: "BMW",
  drive() {
    console.log("vroom vroom!");
    console.log(this);
  },
  brake: () => {
    console.log("slowing down");
    console.log(this);
  },
};

// this will point to the car object
// drive method belongs to the car object when the method is called
// the car object is calling the drive method
car.drive();

const arrowFunction = () => {
  console.log("an arrow function");
  console.log(this);
};

// arrow functions inherit 'this' from their parent scope (lexical this)
// since this function is getting called in the global scope, there is no scope above the global scope
// so 'this' will be the global object
arrowFunction();

// the parent scope of brake is the global scope
// so 'this' will point to the global object (not car!)
car.brake();
