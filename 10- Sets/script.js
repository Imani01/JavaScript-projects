
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
restaurant.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true, 'We are Open').set(false,'We are closed')