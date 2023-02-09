// function Car(model, color) {
//   this.model = model;
//   this.color = color;
// }

// Car.prototype.getFullType = function () {
//   return this.model + " " + this.color;
// };

// var CarObj1 = new Car('BMW', 'Blue');
// var CarObj2 = new Car('MERCEDES', 'Red');

// console.log(CarObj1.getFullType());
// console.log(CarObj2.getFullType());

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  getFullType = function () {
    return this.model + " " + this.color;
  };
}

var CarObj1 = new Car('BMW', 'Blue');
var CarObj2 = new Car('MERCEDES', 'Red');

console.log(CarObj1.getFullType());
console.log(CarObj2.getFullType());

//ES6
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// Person.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// const personObj1 = new Person("John", "Doe");
// console.log(personObj1.fullName()); 
