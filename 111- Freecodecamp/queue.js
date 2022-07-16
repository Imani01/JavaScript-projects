'use strict';

/* Queues */

/*
 function queue () {
    let collection = [];
    this.print = function () {
        console.log(collection);
    };
    this.enqueue = function (value) {
        collection.push(value);
    };// adds the element to the collection array
    this.dequeue = function () {
        collection.shift();
    };//removes the first item and return it
    this.front = function () {
        return collection[0];
    }; //returns the item at the front
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        if (collection.length === 0)
        {
            return true;
        } else
        {
            return false;
        };
    };
};
const myQueue = new queue();
myQueue.enqueue('13');
myQueue.enqueue('17');
myQueue.enqueue(23)
myQueue.print();
myQueue.dequeue();
myQueue.print();
// Check the item at the front
console.log(myQueue.front());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
console.log(myQueue);
*/

// Priority Queue

function priorityQueue() {
    let collection = [];
    this.printItems = function () { // fn prints the collection array
        console.log(collection);
    };
    this.enqueue = function (params) { // fn
        if (this.isEmpty()) // todo attach the this.isEmpty method also to this priorityQueue fn
        {  // checking if there are other collection in the collection array
            collection.push(params);
        } else
        {
            let added = false;
            for (let index = 0; index < collection.length; index++)
            {
                if (params[1] < collection[index][1])
                { // checking priorities
                    collection.splice(index, 0, params);
                    added = true;
                    break;
                };
            };
            if (!added)
            {
                collection.push(params);
            }
        }
        
    };
    this.dequeue = function () {
        const value = collection.shift();
        return value[0];
    };//removes the first item and return it
    this.front = function () {
        return collection[0];
    }; //returns the item at the front
    this.size = function () {
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
};
const mypQueue = new priorityQueue();
mypQueue.enqueue([12, 4]);
mypQueue.enqueue([12, 2]);
mypQueue.enqueue(['statement', 3]);
mypQueue.enqueue(['first', 1]);
mypQueue.enqueue(['same', 2]);
mypQueue.enqueue(['oops', 0]);
console.log(mypQueue.printItems());
console.log(mypQueue.isEmpty());
console.log(mypQueue.size());
