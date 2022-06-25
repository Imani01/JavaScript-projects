'use strict';
// Sets and Maps
// A map is a data structure that we use to map values to keys
// Similar to objects but maps can have any type as the key 

const restaurant = new Map(); // creating a map
// Then to add to the map we use the set(); method
restaurant.set('name', 'Classico Italiano'); // (key,value)
restaurant.set(1, 'Florenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');

// Since each set(); method returns the new set thus we can also chain the sets
restaurant.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are Open').set(false, 'We are closed');
const timeArrial = 22;
if (timeArrial > restaurant.get('open') && timeArrial < restaurant.get('close')) {
    console.log(restaurant.get(true)); // We are Open
} else {
    console.log(restaurant.get(false)); // We are closed
}
// To check whether a map has a certain key
console.log(restaurant.has('name')); // true
// delete property of maps
console.log(restaurant.delete('lounge')); // returns false because the key whose value is to be deleted does not exist
console.log(restaurant.delete('categories')); // returns true because the key whose value is to be deleted exists
console.log(restaurant); // prints the restaurant map
// size property
console.log(restaurant.size); //based on the keys
// clear property returns an empty map
restaurant.clear();
console.log(restaurant.size);

// We can use maps also use objects such as arrays as keys in maps
const arr = [1, 2];
restaurant.set(arr, 'Array as key');
console.log(restaurant.get(arr)); // Array as key

// This would not work
restaurant.set([3, 4], 'Count array');
console.log(restaurant.get([3, 4])); // undefined, because they are not in the same memory location.       
// We can also obtain DOM elements as keys in maps
restaurant.set(document.querySelector('h1'), 'This is the heading');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
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

const rest = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese', 'Salad'],
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
    orderDelivery: function({ time, address, mainIndex, StarterIndex }) { //destructure the object on pass of parameters immediately
        console.log(`Order of ${this.mainMenu[mainIndex]} ${this.starterMenu[StarterIndex]} to be 🚚 delivered at ${address} at ${time} hours`);
    },

};
// creating of maps using an array of arrays
const newMap1 = new Map([
    ['Question', 'What is the capital of France ?'],
    [1, 'Paris'],
    [2, 'London'],
    [3, 'Berlin'],
    ['correct', 1],

    ['time-start', 12],
    ['time-end', 23],
    [true, 'YaY - Correct'],
    [false, 'OOps Try Again'],

]);
console.log(newMap1);

// creating a map from an object

const newMap2 = new Map(Object.entries(rest.openingHours)); // These is because as we know entries return keys and values similar to maps.
console.log(newMap2);

// Iterating over maps
let user_ans = prompt(newMap1.get('Question'));
for (let index of newMap1.keys()) {
    console.log(newMap1.get(index));

}