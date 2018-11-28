// FOR LOOPS
// repeat a section of code for a specified number of times
// for(start; condition; increment) {
//   code to execute each time;
// }

// for(var i = 0; i <= 5; i++) {
//   console.log(i);
// }

var favoriteFoods = ['pizza', 'sushi', 'tacos', 'cookies'];
// console.log(favoriteFoods[0]);
// console.log(favoriteFoods[1]);
// console.log(favoriteFoods[2]);
// console.log(favoriteFoods[3]);

// var favoriteFoodGuess = prompt('Can you guess one of my favorite foods?');

// for(var i = 0; i < favoriteFoods.length; i++) {
//   if(favoriteFoodGuess === favoriteFoods[i]) {
//     alert('You are correct!');
//     break;
//   } else {
//     alert('Incorrect!');
//   }
// }

// WHILE LOOPS
// will run as long as a condition is met (Boolean)
// might never run

while(condition is met) {
  run this code;
}

var faveNum = 7;

while(faveNum < 5) {
  console.log('hi!');
}

var playGame = confirm('Do you want to play a game?');

while(!playGame) {
  playGame = confirm('Do you want to play a game?');
}

var guessesRemaining = 5;

while(guessesRemaining > 0) {
  do something here;
  guessesRemaining--;
}

var flag = false;

while(flag === false) {
  make the user keep guessing;
  if correct, reassign flag to true;
}

// DO WHILE LOOPS
// Boolean, will run as long as the condition is met 
// guaranteed to run at least once
// evaluation is at the end, not the beginning

do {
  run this code at least once;
} while (condition);

// SWITCH CASES
// cleaner than if/else if/else if/else 
// easier to add conditions later

var numGuess = prompt('Guess my favorite number, it is between 1 and 3');

switch(numGuess) {
  case '1':
    alert('Too low');

  case '2': 
    alert('Correct!');
    break;

  case '3':
    alert('Too high!');

  default:
    break;
}
