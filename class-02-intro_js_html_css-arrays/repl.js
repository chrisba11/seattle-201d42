// var userName = prompt('What is your name?');
// console.log(typeof userName);

// var userAge = parseInt( prompt('How old are you?') );
// var userAge = prompt('How old are you?');
// userAge = parseInt(userAge);

// parseInt: take a string and convert it to a number
// console.log(typeof userAge);




// ARRAYS 
// collection of information
// combination of strings, numbers, objects, etc. (you can do this but you shoudln't do this)
// dynamic
// we can add and remove elements
// arrays use square brackets: []
// comma-separated values
// numbering starts at zero

var myArray = ['Allie', 'Gary', 'Charlotte', 'Vinicio'];

// console.log('length before push', myArray.length);

// PUSH
// adds an item to the end of the array
// returns the new length
myArray.push('Gregor');
// console.log( myArray.push('Gregor') );
// console.log('length after push', myArray.length);
// console.log('my array after pushing', myArray);

// UNSHIFT
// adds an item to the beginning of the array
// returns the new length
myArray.unshift('The Hound');
// console.log( myArray.unshift('The Hound') );
// console.log('my array after unshift', myArray);

// POP 
// removes the last element from an array
// returns that element 

console.log('before pop and shift', myArray);

console.log( myArray.pop() );
// console.log( myArray.pop() );
console.log('my array after pop', myArray);

// SHIFT
// removes the firt element from an array 
// returns that element 

console.log( myArray.shift() );
console.log('my array after shift', myArray);
