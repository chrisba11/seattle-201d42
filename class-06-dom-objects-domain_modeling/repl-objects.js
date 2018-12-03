// OBJECT LITERALS
// properties and methods
// key-value pairs
// values can be any data type: string, number, Boolean, arrays, other objects, functions

// var anObject = {
//   key1: value1,
//   key2: value2,
//   key3: value3,
//   key4: value4
// }

var students = ['Allie', 'Cat', 'Tara'];

var hector = {
  height: '70 inches',
  heightInInches: 70,
  handsome: true,
  hometown: 'Tucson',
  email: 'hector@isAwesome.com',
  graderFor: students,
  hair: {
    beard: true,
    moustache: true,
    bald: false
  },
  greeting: function(name) {
    return `Hello, my name is ${name}, my email is ${this.email} and my height is ${this.height}. I am from ${this.hometown}.`
  }
}

var cat = {
  name: 'Cat'
}

hector.greeting(cat.name);

// var hectorsHeight = 'height';
// console.log(hector[hectorsHeight]);

// console.log(hector['height']);

// console.log(hector.hair);
console.log(hector.graderFor[1]);

function doesHectorGrade(student) {
  return hector.graderFor.includes(student);
}

// ARRAY AS AN OBJECT 
// var anArray = {
//   0: 'first element',
//   1: 'second element'
// }
