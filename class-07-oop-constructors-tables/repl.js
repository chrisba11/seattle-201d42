// OBJECT LITERALS
var hector = {
  name: 'Hector',
  age: 20,
  isAwesome: true,
};

// CONSTRUCTOR FUNCTION
// "new" keyword
// factories for object literals
// each object created is called an instance
// can accept arguments
// can have more properties than arguments
// begins with a capital letter (Pascal case)

// general format:
// function Constructor(parameter1, parameter2) {
//   this.parameter1 = parameter1;
//   this.parameter2 = parameter2;
// }

function Student(id, name, hometown) {
  this.studentID = id;
  this.fullName = name;
  this.originalHometown = hometown;
  this.course = '201d42';
  this.instructors = ['Allie', 'Vinicio'];
}

Student.prototype.introduction  = function() {
  return `Hi, my name is ${this.fullName} and I am enrolled in ${this.course}`;
}

// same as making a global function
Student.weather = function() {
  return 'Today it is sunny';
}

var weather = function() {
  return 'Today it is sunny';
}

var tim = new Student(23, 'Tim', 'Dallas');
var leo = new Student(29, 'Leo', 'Los Angeles');

// leo.introduction();
// console.log(tim);
// console.log(leo);

// Student.weather();
