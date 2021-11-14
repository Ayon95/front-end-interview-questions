// The ES6 class syntax is just syntactical sugar over prototype-based inheritance
// classes implement prototype-based inheritance behind the scenes

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }

  isAdult() {
    console.log(this.age >= 18);
  }
}

class Student extends Human {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  attendLecture() {
    console.log(`${this.name} is attending a lecture.`);
  }
}

const mary = new Human("Mary", 21);
const john = new Student("John", 20, "Computer Science");
console.log(john.name);
console.log(john.attendLecture());
