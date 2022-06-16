'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// ARRAYS and OBJECT Destructuring
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic','Bread', 'Caprese','Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  numbers: [3, 5, 2],
  
  order: function (starternumber) {
    return console.log(this.starterMenu[this.numbers[starternumber]]);
  },

  // Nested Objects
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
// TO DO
  orderDelivery: function ({time,address,mainIndex,StarterIndex}) { //destructure the object on pass of parameters immediately
    console.log(`Order of ${this.mainMenu[mainIndex]} ${this.starterMenu[StarterIndex]} to be 🚚 delivered at ${address} at ${time} hours`);
  }
};
// calling the orderDelivery by passing a list or arguments in objects
restaurant.orderDelivery({
  time: '2000',
  address: 'Via Angelo , 21,Nyahururu',
  mainIndex: 2,
  StarterIndex: 1
});

// Destructuring of arrays
// All the elements in our array are assigned to the letters
const [a, b, c, d] = restaurant.starterMenu;
console.log(a, b, c, d);

// We can also give default values incase we don't know the length of our array
const [x = 1, y = 1, z = 1] = restaurant.numbers;
console.log(x, y, z);  // index z has no element in the array

// we can also distructure elements in an array only at specific positions 
const [m, , n, , p] = restaurant.starterMenu;
console.log(m, n, p);  //only items in the 1,3,5 positions are destructure 
//📓  The array is not destroyed and exists
console.log(m, n, p);

// We can also use this method to swap or interchange the elements of an array without using a temp variable
let [first, second] = restaurant.mainMenu;
console.log(first, second);
[first, second] = [second, first];  //responsible for the swapping
console.log(first, second);

// We can also return funtions form other functions
// Enter only the numbers [3,5,2] = Their indexes only
restaurant.order(0);

// WE can also destructure nested ARRAYS
let arr = ['first', 'second', ['third', 'fourth']];
const [note1, note2, [note3, note4]] = arr;
console.log(note1, note2, note3, note4);

// NOTE in arrays we manually need to skip elements unlike in ojects
// In objects we must use the property name but in arrays any name can be used.

// We use the same name as those in the object restaurant
const {openingHours,numbers} = restaurant;
console.log(openingHours, numbers);

// Incase we want to use our own variable names
const { openingHours: Hours_Worked, numbers: count } = restaurant;
console.log(Hours_Worked,count); // same output as in above

// Default values instead of reading undefined
const { openingTime: Opens = [], categories: Types = [] } = restaurant;
console.log(Opens,Types);
// [] gets printed in openingTime because it doesn't exist in our object when opens is called.

// Mutating variables
let num1 = 19;
let num2 = 22;
const obj = { num1: 23, num2: 17, num3: 18 };
({ num1, num2 } = obj); //parentesis are used for mutating of the variables to work;
console.log(num1,num2);

// Nested Objects
const { fri: { open, close } } = Hours_Worked;  //Hours_Worked === openingHours
console.log(open, close);

