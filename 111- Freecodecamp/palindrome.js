'use strict';
// Data Structures and Algorithms#
/* Stacks */
// fn are: push,pop,peek- displays the top element of the stack,legth/size

// Task -To determine whether a word is a palindrome or not 

let letters = []; // This is our stack 

// let word = 'racecar'; //test also with bob
let word = 'bob'

let rev_word = ''; //this will contain the reverse word

// Putting the letters in our stack 
for (let index = 0; index < word.length; index++) {
    letters.push(word[index]);    
};

// pop off the stack in reverse order
// and store the letters in the rev_word
for (let start = 0; start < word.length; start++)
{
    rev_word += letters.pop();  //returns the last letter or word that is popped off  
};

// Check if the word is a palindrome or not
if (word === rev_word) {
    console.log(`${word} is a palindrome: `);
} else {
    console.log(`${word} is not a palindrome: `);
};
