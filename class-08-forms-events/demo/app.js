'use strict';

var dogTable = document.getElementById('dogs');
var dogForm = document.getElementById('dog-form');

function Dog(name, color, breed, nickname) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nickname = nickname;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];

Dog.prototype.render = function () {
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  tdEl.textContent = this.name;

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

  dogTable.appendChild(trEl);
};

Dog.renderHeader = function() {
  var headerRow = document.createElement('tr');

  var headings = ['Name', 'Color', 'Breed', 'Nickname'];

  for(var i = 0; i < headings.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = headings[i];
    headerRow.appendChild(thEl);
  }

  dogTable.prepend(headerRow);
};

Dog.addNewDog = function(event) {
  event.preventDefault();

  var newName = event.target.dogname.value;
  var newColor = event.target.dogcolor.value;
  var newBreed = event.target.dogbreed.value;
  var newNickname = event.target.dognickname.value;

  var newDog = new Dog(newName, newColor, newBreed, newNickname);
  // newDog.render();

  // This will also work
  // new Dog(newName, newColor, newBreed, newNickname).render();

  dogTable.textContent = '';
  Dog.renderHeader();
  Dog.renderAllDogs();
};

var gary = new Dog('Gary', 'White', 'Westie', 'Gare Bear');
var charlotte = new Dog('Charlotte', 'White', 'Westie', 'Goose');
var ollie = new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
var buddy = new Dog('Buddy', null, 'Labra-doodle', 'Baker');
var demi = new Dog('Demi', 'Black and White', 'Border Collie');

// gary.render();
// charlotte.render();
// ollie.render();
// buddy.render();
// demi.render();

Dog.renderAllDogs = function() {
  for(var i = 0; i < Dog.allDogs.length; i++) {
    Dog.allDogs[i].render();
  }
};

Dog.renderHeader();
Dog.renderAllDogs();

dogForm.addEventListener('submit', Dog.addNewDog);
