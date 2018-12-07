var logTwo = function(num) {
  var number = num;
  console.log('number in logTwo', number);
  console.log('two');
}

logOne();
logTwo();

console.log('number before', number);
var number = 5;
console.log('number after', number);

console.log('three');

function logOne() {
  console.log(number);
  number = 40;
  console.log('number in logOne', number);
  logTwo(10);
  console.log('one');
}

// function logTwo() {
//   console.log('two');
// }

