// constructor function for Human entity or "class"
function Human(name, age) {
  this.name = name;
  this.age = age;
}

// populating the prototype of Human with properties
Human.prototype.animalType = "Mammal";
Human.prototype.walk = function () {
  console.log(`${this.name} is walking`);
};
Human.prototype.isAdult = function () {
  console.log(this.age >= 18);
};

// creating an instance of Human which will inherit properties from Human prototype
const mary = new Human("Mary", 21);
// the prototype of any object created through Human constructor
console.log(Human.prototype);
// mary object got linked to Human.prototype when it was created
// mary.__proto__ points to Human.prototype
console.log(mary.__proto__);
// mary object doesn't have walk and isAdult methods; it inherited those methods from its prototype
mary.walk();
mary.isAdult();
// creating a second 'class' Student that inherits from Human
function Student(name, age, major) {
  // calling the Human constructor and binding its 'this' to the Student instance that gets created
  // also passing name and age into Human
  Human.call(this, name, age);
  this.major = major;
}

// We want the Student prototype to inherit Human prototype
// To do that, we assign a copy of Human prototype to Student prototype
Student.prototype = { ...Human.prototype };
// setting the prototype of Student prototype - establishing the link between Student prototype and Human prototype
Student.prototype.__proto__ = Human.prototype;
// setting the constructor associated with Student prototype to the appropriate constructor
Student.prototype.constructor = Student;

// adding additional properties to Student prototype
Student.prototype.attendLecture = function () {
  console.log(`${this.name} is attending a lecture`);
};

const john = new Student("John", 20, "Computer Science");
john.walk();
john.attendLecture();

console.log(Human.prototype);
console.log(Student.prototype);
console.log(john.__proto__ === Student.prototype);
console.log(john.__proto__.__proto__ === Human.prototype);
// john -> Student prototype -> Human prototype -> Object prototype -> null
console.log(john.__proto__.__proto__.__proto__ === Object.prototype);
// Object.prototype is always at the top of a prototype chain
console.log(john.__proto__.__proto__.__proto__.__proto__); // null

// prototype of built-in objects
const myArr = [1, 2, 3, 4];
console.log(myArr.__proto__ === Array.prototype);
