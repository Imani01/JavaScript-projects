'use strict';


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic','Bread', 'Caprese','Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  
  order: function (starternumber) {
    return console.log(this.starterMenu[this.numbers[starternumber]]);
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

// for orderSpecification function
// ... used for passing arguments to functions
const ingredients = [prompt('Let\'s make paster Ingerdient 1?'), prompt('Ingredient 2 ?'), prompt('Ingredient 3 ?')];
restaurant.orderSpecification(...ingredients);
console.log(ingredients);

// The spread operator (...) includes the elements of the arr array to the newArray as if we typed each manually.
const arr = ['fourth', 'fifth', 'sixth'];
const tiring = ['first', 'second', 'third', arr[0], arr[1], arr[2]];
// instead
const newArray = ['first', 'second', 'third', ...arr];
console.log(newArray);

// can also be used to log the induvidual elements of an array
// creating a new array but adding new elements
// initial array
console.log(restaurant.mainMenu);
const newmainMenu = [...restaurant.mainMenu, 'Succhi 🍕 '];
console.log(newmainMenu);

//NOTE => the spread operator unlike destructuring doesn't create new variables

// The spread operator can be used to join two arrays together
const Menu = [...restaurant.mainMenu,...restaurant.starterMenu ];
console.log(Menu);

// NOTE 2: - Iterables are Arrays, String,Maps and even sets but not objects
// To change the property of an object
const restaurantFlintcom = {...restaurant}; // a copy with the exact same restaurant key and values
// to change its name of the copy
restaurantFlintcom.name = 'Flintcom';
console.log(restaurantFlintcom);
console.log(restaurantFlintcom.name); // to view the name more clearly
