'use strict';

// IIFE - Immediately Invoked Functions and Execution
// Used when we want to execute a function once 
(function stateCount () { // without arguments
    console.log('IIFE called and invoked without Arguments');
})();

(function Airline (number) {  // with arguments
    console.log(`${ number } planes`);
})(300);

// We can also do this with arrow functions:
(() => console.log('This will NEVER Run Again!! '))(); // runOnce

// They create blocks and scopes
{ // using the block
    const isPrivate = 17;
    let isAlsoPrivate = 19;
    var isNotPrivate = 23; // not used with modern javascript
};

// const creates its own scope inside the block unlike var and let
// console.log(isPrivate); // not defined
// console.log(isAlsoPrivate); // notdefined
console.log(isNotPrivate);

const boardPlane = function (n, wait) {
    const perGroup = n / 3;

    // the callback setTimeout() fn has by closure access to the perGroup and n variables that have long finished execution 
    setTimeout(function () {// time is set in milliseconds 1000milliseconds  = 1 sec 
        console.log(`We are now boarding all ${ n } passengers.`);
        console.log(`There are 3 groups each with ${ perGroup } passengers.`);
    }, wait * 1000); // so the number passed will be seconds

    // This will not execute after the given seconds
    console.log(`We we start boarding after ${ wait } seconds. `);
};

// function call 
boardPlane(120, 8); // 8 seconds