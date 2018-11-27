'use strict';

// CONDITIONAL LOGIC
// if/else

// if(condition) {
//   run this line of code
// } else {
//   run this code instead
// }

// if(condition) {
//   run this line of code
// } else if (condition 2) {
//   run this code
// } else {
//   run this code instead
// }

var petGuess = prompt('How many pets do you think I have?');
petGuess = parseInt(petGuess);

if(petGuess === 2 || petGuess === 'two') {
  alert('That is correct!');
} else {
  alert('That is incorrect!');
}

var startGame = confirm('Do you want to play my guessing game?');

if(startGame) {
  alert('Great, let\'s play!');
} else {
  alert('Ok see you later');
}

// yes, YES, Yes, no, NO, No, y, Y, N, n, yeah, yep, nope

var hasTraveled = prompt('Do you think I have traveled to Paris? Please respond with Y or N.');

if(hasTraveled === 'N') {
  alert('Sadly, you are correct, I have not been to Paris (yet)');
} else if (hasTraveled === 'Y') {
  alert('No, I have not been there yet');
} else {
  alert('Please answer with Y or N!');
}
