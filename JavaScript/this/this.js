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

// arrow functions do not bind their own 'this' keyword
// arrow functions inherit 'this' from their parent scope (lexical this)
// since this function is defined in the global scope, 'this' of global scope will be used
// so 'this' will be the global object
arrowFunction();

// since brake belongs to car which is an object defined in the global scope, 'this' of global scope will be used
// so 'this' will point to the global object (not car!)
car.brake();

const title = document.querySelector(".title");
// 'this' keyword in an event handler points to the HTML element on which the event occurred
// if the event handler is an arrow function, then 'this' will point to the global object (window) which is the parent scope here
title.addEventListener("click", function () {
  console.log(this);
});
