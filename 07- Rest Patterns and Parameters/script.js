'use strict';


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
  },
  // real_world problem example
  orderSpecification: function (ingr1,ingr2,ingr3) {
    console.log(`This is an Order of pizza made with ${ingr1} ${ingr2} and ${ingr3}`);
  }
};
// calling the orderDelivery by passing a list or arguments in objects
restaurant.orderDelivery({
  time: '2000',
  address: 'Via Angelo , 21,Nyahururu',
  mainIndex: 2,
  StarterIndex: 1
});

// The Rest parameter is just like the Spread only that unlike the Spread operator it comes on the left hand side of the =
// RECAP Spread  on the R.H.S
// const arr = [1, 22, 44, ...[34, 33, 43]];
// console.log(arr);

// Rest on the L.H.S -used in destructuring
const [a, b, ...others] = ['man', 'made', 'string', 'literal', 'template'];
console.log(a, b);
console.log(others); //contains the 3rd to the n.length -1 element. //they are stored in an array

// NOTE it doesn't include the skipprd elements
// since in objects the order doesn't matter
const { fri, thu, ...weekends } = restaurant.openingHours;
console.log(weekends);

// With functions
const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(sum);
 
};

add(2, 3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);
 
const x = [23, 5, 7];
add(...x);


