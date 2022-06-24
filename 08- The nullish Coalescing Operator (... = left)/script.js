'use strict';

const canada= {
  time: '2000 hrs',
  date: '12th Feb 2023',
  arrival: ['Edmonton', 'Quebec City', 'Montreal', 'Vancouver', 'Ottawa', 'Winnipeg', 'Calgary'],
};

// OR operator evaluates the statement untill it finds a truthy value and then prints it.
console.log(null || undefined);  //prints undefined
console.log(undefined || null);  //prints null

// AND operator in short circuiting
// if the first value is truthy then the evauation continues and print the fist falsy value
console.log(14 && 'Kelly' && true && [12, 33, 45] && undefined && null);
// if there ain't any the last truthy value is printed
console.log(14 && 'K' && true && [12, 33, 45]);

// The nullish coalescing operator ??
canada.population = 0;  // nullish 0 or '' 
const result = canada.population || 10;
console.log(result); //prints 10 

// if we want to print the nullish value 0 or undefined 

const correct_population = canada.population ?? '38.01 M';
console.log(correct_population); //prints the value 0

canada.capitalCity = ' '; // nullish operator
const correct_capital = canada.capitalCity ?? 'Ottawa';
console.log(correct_capital);

canada.women; //undefined
const state_count = canada.women ?? '18.91 Vs 18.68';
console.log(state_count);  // the string '18.91 Vs 18.68' is printed





