'use strict';

// Creates a stack

let stack = function () {
    this.counter = 0;
    this.storage = {}; //an empty object

    // Adds a value onto the end of the stack 
    this.push = function (value) {
        this.storage[this.counter] = value;
        this.counter++;
    
    };

    // removes and returns the value at the end of the stack
    this.pop = function () {
        if (this.counter === 0)
        {
            return undefined; // ie no item in the stack
        } else
        {
        this.counter--;
        let result = this.storage[this.counter]; // here
        delete this.storage[this.counter]; 
            return result; // display the last element before deleting it
        }
    };
    // Returns the size of the current stack
    this.size = function () {
        return this.counter;
    };
    // Views the last item of the stack without removing it
    this.peek = function () {
        return this.storage[this.counter - 1];
    };
}; 
const myStack  = new stack();
myStack.push(12);
myStack.push(17);
myStack.push(23);
console.log(myStack);
console.log(myStack.peek()); // displays the 23 (last item of the stack)
console.log(myStack.pop()); // deletes the 23 
console.log(myStack);
console.log(myStack.size());
console.log(myStack.peek()); // doesn't remove the 17
console.log(myStack);