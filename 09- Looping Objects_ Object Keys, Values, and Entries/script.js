'use strict';

// We can also compute property names instead of having to tyoe them manually

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic','Bread', 'Caprese','Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  numbers: [3, 5, 2],
  
  // We no longer have to refer to the property and set it to a function expression instead:-
  // unlike in orderDelivery refer
  // NEW
  order(starternumber) {
    return console.log(this.starterMenu[starternumber]);
  },
  // if we still want to have our openingHours at the restaurant objects we 
  // ES6 enhanced object literals
  openingHours,
// TO DO
  orderDelivery: function ({time,address,mainIndex,StarterIndex}) { //destructure the object on pass of parameters immediately
    console.log(`Order of ${this.mainMenu[mainIndex]} ${this.starterMenu[StarterIndex]} to be 🚚 delivered at ${address} at ${time} hours`);
  },

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Optional chaining
// In the case we want to read data from an obect we don't know if it exists
// sice monday doesn't exist and we are trying to read a open from undefined returns an error.
// optional chaining prevents that
// console.log(openingHours.mon.open);

// instead we set monday to optional
console.log(restaurant.openingHours.mon?.open); //returns undefined
// if we don't know if openingHours exist we can also set it to optinal
console.log(restaurant.openingHours?.[weekdays[3]]);  //only when its there is openingHours then read [weekdays[3]]

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day); //prints every day of the days array
  // using bracket notation to assign the days: String[] to the openingHours as property names
  const opens = restaurant.openingHours[day]?.open ?? 'N/A'; //sets the default value incase it's not found
  console.log(`On ${day}, we open at ${opens}`);
};

// Methods
// We can also check if a method exists or not before calling it.
console.log(restaurant.order?.(4) ?? 'Method does not exist'); // should not print the method doesn't exist
console.log(restaurant.orderPizza?.(2) ?? 'Method does not exist'); // works fine

// Arrays - an array of two objects
const user = [{ name: 'Imani', email: 'iproholyce@gmail.com' }, { height: 1.68, weight: 70 }]; 
console.log(user[1]?.height ?? 'Value is not given');

// property NAMES
// We can also loop through objects but in an indirect way
const checkObjectKeys = Object.keys(openingHours); // an array of the keys of the object property names
// console.log(checkObjectKeys);
console.log(checkObjectKeys); // an array of the three days
let info = `We are open for ${checkObjectKeys.length} days: `;
for (const day of checkObjectKeys) {
  info += `${day},`;
}
console.log(info);

// property VALUES
const property_values = Object.values(restaurant.openingHours);
console.log(property_values);
// We get entries as they are names plus values together,
// in arrays entries becomes a method while in objects is a function where the the oject is passed.
const Keys_with_values = Object.entries(restaurant.openingHours);
console.log(Keys_with_values);
// check with the above output
console.log(Keys_with_values[1][0]); // fri

// loops thru the arrays containing the keys and values
//[keys,values] // but again the value is an object
for (const [key,{open,close}] of Keys_with_values) { //immediate destructuring
  // [key,{open,close}] replaced keyval
  // console.log(...keyval);
  const string = `On ${key}, we open at ${open} and close at ${close}`;
  console.log(string);
}
