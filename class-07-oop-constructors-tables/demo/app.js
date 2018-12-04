'use strict';

/* To see what we need to do to build a HTML table with JS, let's take a look at the HTML needed to start the table and make the top two rows:

<table>                 PUT THIS AND ONLY THIS IN THE HTML, WITH AN ID
  <tr>                  create tr
    <th>Name</th>       create a th, give it content, append it to tr
    <th>Color</th>      create a th, give it content, append it to tr
    <th>Breed</th>      create a th, give it content, append it to tr
    <th>Nickname</th>   create a th, give it content, append it to tr
  </tr>                 append tr to the table

  <tr>
    <td>Gary</td>
    <td>White</td>
    <td>Westie</td>
    <td>Gare Bear</td>
  </tr>
</table>

Tables are built in the same way that a typewriter types: left-to-right, top-to-bottom.

Thus, we'll want to create and append HTML elements in the same order.

We have already put an empty <table> element in the HTML, with id="dogs" */

// We need to access the table that is in the DOM
var dogTable = document.getElementById('dogs');

// We need a constructor to make our dog objects
function Dog(name, color, breed, nickname) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nickname = nickname;
  Dog.allDogs.push(this);
}

// We need an array to hold our dogs
Dog.allDogs = [];

// Let's make a render() method on the constructor's prototype, rather than typed into the constructor function; this will tidy up the way things look in your editor
Dog.prototype.render = function () {
  // create tr
  var trEl = document.createElement('tr');

  // create td
  var tdEl = document.createElement('td');

  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
  tdEl.textContent = this.name;

  // append td to tr
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.color;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.breed;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.nickname;
  trEl.appendChild(tdEl);

  // append tr to table
  dogTable.appendChild(trEl);
};

// We need a separate function to make the table header
Dog.renderHeader = function() {
  // make a new row
  var headerRow = document.createElement('tr');

  var headings = ['Name', 'Color', 'Breed', 'Nickname'];

  for(var i = 0; i < headings.length; i++) {
    // 1. create a th element
    var thEl = document.createElement('th');

    // 2. give it content
    thEl.textContent = headings[i];

    // 3. append it to the row
    headerRow.appendChild(thEl);
  }

  // prepend row to table
  dogTable.prepend(headerRow);
};

// APPROACH 1: MAKE GLOBAL VARIABLES FOR EACH DOG, THEN CALL THE RENDER METHOD OF EACH INSTANCE
// We need to create our Dog instances
var gary = new Dog('Gary', 'White', 'Westie', 'Gare Bear');
var charlotte = new Dog('Charlotte', 'White', 'Westie', 'Goose');
var ollie = new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
var buddy = new Dog('Buddy', null, 'Labra-doodle', 'Baker');
var demi = new Dog('Demi', 'Black and White', 'Border Collie');

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows
gary.render();
charlotte.render();
ollie.render();
buddy.render();
demi.render();

// APPROACH 2: BECAUSE THE INSTANCES ARE PUSHED INTO THE ARRAY, WE CAN USE A FOR LOOP TO CALL THE RENDER METHOD OF EACH INSTANCE
// new Dog('Gary', 'White', 'Westie', 'Gare Bear');
// new Dog('Charlotte', 'White', 'Westie', 'Goose');
// new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
// new Dog('Buddy', null, 'Labra-doodle', 'Baker');
// new Dog('Demi', 'Black and White', 'Border Collie');

// Dog.renderAllDogs = function() {
//   for(var i = 0; i < Dog.allDogs.length; i++) {
//     Dog.allDogs[i].render();
//   }
// };

// Dog.renderAllDogs();


Dog.renderHeader();

