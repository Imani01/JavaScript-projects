'use strict';

// First create an array using randomly generated numbers. 

let arr = [];

for (let index = 0; index < 20; index++) {
    arr.push(Math.floor(Math.random() * 20));
};

/*
// Quick Sorting Technique.
// Here a pivot is selected and all numbers below it are moved to the right.
// This is done until the array is competely sorted.

const arr2 = [];

function quickSort (arr) {
    if (arr.length === 0) {
        return arr;
    };
    let pivot = arr[0];
    let arrLeft = [];
    let arrRight = [];

    for (let start = 0; start < arr.length; start++) {

        if (arr[start] < pivot) {
            arrLeft.push(arr[start]);
        };
        if (arr[start] > pivot) {
            arrRight.push(arr[start]);
        };
    
    };
    return quickSort(arrLeft).concat(pivot).concat(quickSort(arrRight));
};

// console.time();  and console.timeEnd() used together to tell the time taken by a certain operation.
console.time();
// Function call
console.log(quickSort(arr));
// console.log(quickSort(arr2)); // when called with an empty array
console.timeEnd();

*/
// BubbleSort compares two elements and swaps them small-left repeatedly

function bubbleSort (arr) {
    if (arr.length === 0) {
        return arr;
    } else {
        let sorted = true;
        do {
            for (let index = 1; index < arr.length; index++) {
                if (arr[index - 1] > arr[index]) {
                    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
                    sorted = false;
                };              
            };
        
        } while (sorted);

    }; // else
    return arr;
}; // bubbleSort
console.log(bubbleSort(arr));