'use strict';

// NOTE: - A function always has access to the variable environment of the execution context in which it was created even after the execution context is gone.
const passengerCount = 10;

const secureBooking = function () {
    let passengerCount = 0;

    return function () {   // booker fn
        passengerCount++;
        console.log(`${ passengerCount } passengers`);
    
    };
};

const booker = secureBooking(); // returns the function

// This booker function still has access to the variable passengerCount of the secureBooking even after it's execution context has completed 
// It will first check for the passengerCount in the function first
booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// To see the closure in the booking: // ie to inspect the variable environment
console.dir(booker); // [[scope]] -- means that we cannot access the variable anywhere in our code

//  reassigning of f fn

let f;
// simple Math manipulation
function g() {
    const favNum = 17;
    f = function () { // first assignment
        console.log(favNum * 3);
    };
};
g();
f(); 
console.dir(f); // scope g

// Reassigning of the f fn
function h (someNum) {
    f = function () {
        console.log(`${ someNum * 4}`);
    };
};
h(33);
f();
console.dir(f); // scope h