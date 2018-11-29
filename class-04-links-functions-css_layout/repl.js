// FUNCTIONS 
// organizes our code
// reusable
// can be called with different arguments
var counter = 0;

function math(num1, num2) {
  counter++;

  var product = num1 * num2;
  var sum = num1 + num2;
  var message = 'HI!';
  return [product, sum];
}

var subtotal = math(3, 15);
console.log(subtotal);
console.log(subtotal[0]);
console.log(subtotal[1]);
console.log(counter);
