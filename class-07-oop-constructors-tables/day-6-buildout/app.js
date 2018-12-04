'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  aveCookiePerCust: 6.3,
  // runningTotal: 0, this can be a property of the object that we use later

  randomCustPerHour: function() {
    // generate a random number between the store's min and max
    return Math.round( Math.random() * (this.maxCust - this.minCust) + this.minCust );
  },

  averagePerHour: function() {
    // multiply the random number (generated above) by the average
    return Math.round( this.randomCustPerHour() * this.aveCookiePerCust );
  },

  generateList: function() {
    // access the ul from the HTML
    var ulElement = document.getElementById('first-pike');
    var runningTotal = 0;

    for(var i = 0; i < storeHours.length; i++) {
      // 1. create the element (li)
      var liElement = document.createElement('li');

      // 2. give it content (calculated sales)
      var randomNum = this.averagePerHour();
      runningTotal += randomNum;

      liElement.textContent = `${storeHours[i]}: ${randomNum} cookies`;

      // 3. append to its parent (ul)
      ulElement.appendChild(liElement);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total for the day: ${runningTotal} cookies`;
    ulElement.appendChild(totalEl);
  },
};

firstAndPike.generateList();
