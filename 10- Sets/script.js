
'use strict';
// Sets and Maps
// Sets are a collection of unique values and do not contain duplicates
const newSet = new Set(['pizza', 'rissoto', 'pasta', 'pizza', 'garlic']);  // How we create new array sets.
console.log(newSet);
console.log(new Set('Proholycepr').size); // caps sensitive // size || length
console.log(newSet.has('pizza')); // has || includes return boolean

// Adding an element or string to the set
newSet.add('red pepper');
newSet.add('red pepper');
console.log(newSet);

// Delete an element from the set
newSet.delete('garlic');
console.log(newSet);

// looping  through a set 
for (let order of newSet) { console.log(order); }

// creating a set from arrays
const arr = ['Chief', 'Security', 'Accountant', 'Chef','Manager', 'Chef'];
const SetArr = new Set(arr);
// creating an new array with unique text ie without repetition.
const playArr = [...new Set(arr)];
console.log(SetArr); 
console.log(playArr);

// NOTE Since sets are also iterables the same manipulation done with arrays can be used on sets
newSet.forEach(function (value, _, set) { // three args are passed value key and entire set 
    // console.log(`${ key }: ${ value }`);  // but since the key and value are the same
    // we use the throwayVariable (_) to use same params ie
    // (value,value,set)
    console.log(`${ value }:${ value }`);
});