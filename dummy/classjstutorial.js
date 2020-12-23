// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.width * this.height
//   }

//   perimeter() {
//     return (this.width * 2) + (this.height * 2)
//   }
// }

// let a = new Rectangle(12, 10)

// class Dog {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   bark() {
//     console.log("woof woof")
//   }

// }





// let dog = new Dog("lucky", "brown")

// dog.bark()

// console.log(dog)

class CovidUser {
  constructor(name, lastName, phoneNumber, id, location, isSick) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.id = id;
    this.location = location;
    this.isSick = isSick;
  }

  emailResults() {
    // Here the user would be email with results
    return `${this.name} ${this.lastName} is ${this.isSick ? "" : "NOT"} sick`;
  }

  get legalName(){
    return `${this.name} ${this.lastName}`
  }

  get age(){
    return 22
  }
}

let UserCovid2 = function(name, lastname){
  this.name = name;
  this.lastName = this.lastName

  function legalName(){
    return `${this.name} ${this.lastName}`
  }
}



class Major{
  constructor(name, credits){
    this.name = name
    this.credits = credits
  }

}

class Animal{
  makeSound(){
    return 'growl'
  }
}

class Dog extends Animal{

}

let a = new Dog()
a.growl()


class Student


function getLegalName(user){
  return `${user.name} ${user.lastName}`
}



let marco = new CovidUser("marco", "orellana", "5555-555", 12, "Fairfax", false);

marco.isSick = true

console.log(marco.emailResults())
console.log(marco.legalName);

// ================================================
let flavio = {
  name: "Flavio",
  lastName: "Amurrio",
  phoneNumber: "333",
  id: 14,
  location: "annandale",
  isSick: false
}

flavio.age = 32


function emailResults(user) {
  return `${user.name} ${user.lastName} is ${user.isSick ? "" : "NOT"} sick`;
}

console.log(emailResults(flavio));