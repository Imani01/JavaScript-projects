// Activating strict mode in order to write secure JavaScript code
// Should be the very first code in our program 
'use strict';
/*
function logger() {
  console.log('I am Imani');
}
// function call
logger();

function fruit_processor(avocado,mango) {
  
  const juice = console.log(`This juice contains ${avocado} avocados 🥑  and ${mango} mangoes`);
  return juice;
}
// this stores the value returned from the function
const fruitJuice = fruit_processor(2, 4);
// Nb The function fruit processor returns the output statement in const juice

// hoisting
// function declarations 'unlike' function expressions can be called before declaring them

// function call and assignation to the Age1
const currentYear = 2012;
const Age1 = calcAge1(1967,currentYear); //here it's called then assigned below

function calcAge1(birthYear,currentYear) {
  return currentYear - birthYear;
}

// function expression
const calcAge2 = function (birthYear){
  return 2022 - birthYear;
}
const Age2 = calcAge2(1966);

console.log(Age1,Age2);
*/

// ..........................................................................................................................

/*
// Arrow Functions
// have a limitation in that cannot use this.
const calcAge3 = birthYear => 2037 - birthYear;
const Age3 = calcAge3(1991);
console.log(Age3);

// in the case where you want to pass two args and return more than one block of code in the function

const yearsUntilRetirement = (birthYear, firstName) => {   //function block
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  // using a string literal
  return `${firstName} retires in ${retirement} years`;
}
const statement1 = yearsUntilRetirement(1980, 'Bob');
console.log(statement1);

//same code but in function expressions.
const retirementYears = function (birthYear, firstName) {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;

}
const statement2 = retirementYears(1980, 'Bob');
console.log(statement2);
*/

/*
//using of Array function can be another way to declare arrays

const phones = new Array('Samsung', 'Oppo', 'Iphone');
// alternatively
const oddNums = [7, 5, 3, 671];

console.log(phones[1], phones.length);
// get the last element of the array
console.log(oddNums[oddNums.length - 1]);

// array methods
// push adds an element to the end of the array
console.log(oddNums.push(23, 2)); //returns the length of the string

// unshift method add to the beginning
phones.unshift('Redmi📱');
console.log(phones);

// shift() removes the first element
phones.shift(); //removes the redmi 📱  which was added by the unshift();
console.log(phones);

//remove an element at the last position
oddNums.pop(); // 2 is even is removed at the last position

// pop() returns the removed item from the array
console.log(oddNums.pop());  //23
console.log(oddNums);

// to return the position of an element in an array
// to find the position of Oppo in phones
const oppo_position = phones.indexOf('Oppo');
console.log(oppo_position);  // 1

// to check if a certain element is in array we use includes
const check_infinix = phones.includes('infinix'); //returns boolean //false
console.log(check_infinix);
*/

/*
// creating of an object containing my details
// Keys and dots are used appropriately
const myDetails = {
  firstName:'Proholyce',
  lastName: 'Imani',
  age: 2022 - 1991,
  job: 'Software Engineer',
  friends: ['You', 'Evans', 'Brian', 'Elizabeth'],
  university: 'Jkuat',
  HomeTown: 'Nakuru'
};

// you can add details to the object in the following ways
myDetails.twitter = '@scandot12';
// CODE NOTES - Here bracket notation has been used to add a key to the object myDetails
myDetails['currentLocation'] = 'Juja';

// to access elements from the object using dot notation
console.log(myDetails.friends[3]);

// Bracket notation 
const nameKey = 'Name';
console.log(myDetails['first' + nameKey]);
console.log(myDetails['last' + nameKey]);



// undefined is what we get if we try to get an object not in myDetails;
alert('Type as they are');
const interestedIn = prompt('What do you want to know about Me: firstName, lastName, age, job, university, twitter handle,currentLocation, HomeTown or even friends ?');
alert(myDetails[interestedIn]);

console.log(`${myDetails.firstName} has ${myDetails.friends.length} friends and his bestfriend is ${myDetails.friends[0]}`);   
*/

/*
// Declaring a function inside an object and Using this keyword
const myDetails = {
  firstName:'Proholyce',
  lastName: 'Imani',
  birth_year: 1991,
  job: 'Software Engineer',
  friends: ['You', 'Evans', 'Brian', 'Elizabeth'],
  university: 'Jkuat',
  HomeTown: 'Nakuru',
  
  //We can also add functions

  calcAge: function () {
    // this is the object myDetails
    return 2017 - this.birth_year;
  } 
};

// console.log(myDetails.calcAge(1991)); // This is however not dry code

//now after using this we can just call the function without the value in brackets
console.log(myDetails.calcAge()); 

*/

/*
//looping backwards in arrays
const testArray = new Array('Samsung📞', 12, true, ['index', 25244120]);
for (let index = testArray.length-1; index >= 0; index--){
  console.log(testArray[index]);
}
*/
/*
//FIXME 
//while
let dice = Math.trunc(Math.random() * 6 + 1);
do {
  
  console.log(`You have rolled a ${dice}`);
}
while (count !== 6);
*/

/*
// finding the max and min numbers from an array
const oddnums = new Array(5, 3, 15, 11, 9,19);
let max = oddnums[0];
let min = oddnums[0];

for (let index = 0; index < oddnums.length; index++){
  if (oddnums[index] < min) min = oddnums[index];
  if (oddnums[index] > max) max = oddnums[index];
};
console.log(max); //19
console.log(min); //3
*/

// Part #2
'use strict';

/*
//task 1
const calcAverage = (trial1,trial2,trial3) => {
  const avg = (trial1 + trial2 + trial3) / 3;
  return avg;
} 
// task 2
const avgDolphins = calcAverage(85, 54, 41);
console.log(avgDolphins);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgKoalas);


const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else if(avgDolphins > 2 * avgKoalas){
    console.log(`Dolphines win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log('no team wins ✖ !!')
  }
}
checkWinner(avgDolphins, avgKoalas);

// No team wins !!
//The Dolphines win = data2

*/


/*

// Tip Calc
// ....................................................ComeBack..............................................................
const bill = [125, 555, 44];
let arr = new Array();

function calcTip(bill) {
  for (let index = 0; index <= bill.length - 1; index++) {
    let tip = 50 >= bill[index] <= 300 ? bill[index] * 0.15 : bill[index] * 0.2;
    arr.push(tip);
  }
  console.log(arr);
}
let valueTip = calcTip(bill);

// print all the array elements using for-of loop
for (let arrayElements of bill) {
  console.log(arrayElements);
}
*/

// function squareDigits(num){
//   const $string = String(num);
//   let index = 0;
//   for(index of $string){
//     const $product = index ** 2;
//   }
//   const result = ;
//   return result;
// }
// const ans = squareDigits(234);
// console.log(ans);

// FIXME🐛 TO DO
/*
const num = 3212;
const splitNum= num.toString().split("");
console.log(splitNum);
for (let index = 0; index < splitNum.length; index++) {
  const element = splitNum[index] ** 2;
  console.log(`${element}`);
}
*/

/*
const myDetails = function () {
  const measurement = {
    height: "168",
    shoe: 8,
    weight: "71"
    
  };
  const birth_details = {
    firstName: "Proholyce",
    lastName: "Imani",
    Date_of_birth: 2037

  };
  const value = measurement.shoe - 1;
  console.log(value);
};

// console.error(myDetails.age); //prints an error to the console
// console.warn(myDetails.age);   //prints a warning to the console
*/

/*
let FirstName = 'Jonas';
//display the result of the calculations to the console
console.log(40 + 32 - 26);
console.log(FirstName);
// constants are named using all caps
// $ and _ can be used at the beginning of names
let $function = 35;
console.log($function);
// 22 / 7
let PI = 3.142857142857143; 
// write descriptive code
// myPrevious_job $ myCurrent_job are primitive values
let myPrevious_job = 'Programmer';
let myCurrent_job = 'Software Developer';
// to change value of the variable initially  declared
myPrevious_job = "WorkStudy";

console.log(myPrevious_job + " => " + myCurrent_job);

// values in javascripts are either objects or primitive values
// example of object values
let me = {
  name:'Imani👦 ',
  school: 'jkuat 🏫 ',
  age: 21
}
console.log(typeof me);
// output object
// calling an item from the object school
console.log(me.school);  //output jkuat

//undefined variable
let nameless;
console.log(typeof nameless);  //undefined

// interview questions
//this bug is never corrected due to legacy reasons
console.log(typeof null)  //returns an object

// const is used for constants
const GFORCE = '9.807 meters/squared'; 
*/

//.........................................................................................................
/*
// operators 
// 3 raised to the power of 4
let math = 3 ** 4;  but Math is a function ie Math.trunc(Math.rand())
console.log(math);

const NOW = 2022;
const ageSarah = NOW - 2006;
const ageJonas = NOW - 2002;
let ageDifferenceCouple = ageJonas - ageSarah;
console.log(ageDifferenceCouple, ageSarah, ageJonas); 

if (ageDifferenceCouple >= 5) {
  console.log('Good age difference');
} else {
  console.log(5 - ageDifferenceCouple + ' year(s) still remain(s)');
}
*/

//.........................................................................................................
// type conversion and type coercion
// type conversion is manual while type coercion is automatic by JavaScript

/*
const inputNumber = '93';
console.log(Number(inputNumber) + 18);

// typeof NaN - "Not a Number" is a number invalid typeof (number)
// we get not a number whenever an operation on numbers fails to give us a new number  
console.log(typeof (NaN));  // number

// type coercion
// string can be converted to numbers and not the other way around
// all other operands apart from + sign (strings are converted to numbers and the operand used accordingly)
console.log("I am " + 23 + " years old. ");

console.log("23" - "10" - 3);  //output 10
// if the reverse is + then the string is concatenated
console.log("23" + "10" + 3); //output 23103

// guess the output
let n = "1" + 1; //"11"
n = n - 1;  //minus brings coercion so string => number
console.log(n); //ouput 10 (number)

// truthy and falsy values
// falsy values are not typically false but are values that actually become false when we try to convert them to boolean
// They are 5 namely = 0,'',NaN,undefined,null and false

// NB an empty object is a truthy value
console.log(Boolean({}));

// normally the truthy values occur in type coercion
let height; // let height = undefined;
if (height) { // false and thus will not be printed
  console.log('Height is defined');
} else {
  console.log('Height is UNDEFINED! ');
}

// reading user input we use the prompt()
//the Number() ensures that whatever is to inserted is converted to a number
const user_fav_no = Number(prompt('What is your favourite number ?'));
alert(user_fav_no);
if (user_fav_no === 23 ) { //strictly equal to '==='
  console.log(`User entered the number ${user_fav_no}`);
} else{
  console.log("invalid!!");
}
*/

/*

//in the case of switch, strict comparison is done
// conditional statement also called ternary operator
const age = 23;
age >= 18 ? console.log('Wine 🍷  can be served') : console.log('Wait till of age 🧓.' + 'Drink 💧');

// since javascript isn't foward compatibility the we use babel to write/convert modern javascript back to ES5 in a process called transpiling and also polyfilling.
*/

/*// Coding Challenge #1
// height in meters and weight in kilograms
// question 1
let mark_height = 1.69;
let mark_weight = 78;
let john_height = 1.95;
let john_weight = 92;

// question 2
// Mark's BMI
let $BMI_mark = mark_weight / (mark_height ** 2);
console.log($BMI_mark);

 // John's BMI 
let $BMI_john = john_weight / (john_height * john_height);
console.log($BMI_john);

// question 3
let markHigherBMI = $BMI_mark > $BMI_john;  //returns boolean
console.log(markHigherBMI);

// Coding challenge #2
// ternary operator used
const greaterBMI = $BMI_mark > $BMI_john ? console.log("Mark's BMI is higher than John's") : console.log("John's BMI is higher than Mark's");

// Template literal
// They are used to write complex string with much ease
// as the variables are inserted directly into the string without having to format it with spaces manually
// backticks are used
// to insert the variables we do so by => ${variable_name}

const $template_literal = `Mark's BMI of ${Math.trunc($BMI_mark)} is higher than John's ${Math.trunc($BMI_john)}`;
console.log($template_literal);

// backticks can also be used to create multiple-lines strings useful in creating of multiline html elements to insert them into a page dynamically.

console.log(`Strings
multiple
lines `);


// Coding challenge #3
const Dolphine_Avg = (97 + 112 + 101) / 3;
const Koalas_Avg = (109 + 95 + 123) / 3;

const isMinScore = 100;

console.log(`
Dolpins' average is ${Math.trunc(Dolphine_Avg)}
Koalas' average is ${Koalas_Avg}
`);
 
const isTrue = Dolphine_Avg >= isMinScore && Koalas_Avg >= isMinScore;
console.log(isTrue);
if (isTrue) {

  if (Dolphine_Avg !== Koalas_Avg) {
    const result = Koalas_Avg > Dolphine_Avg ? console.log("The Koalas win!!") : console.log("The Dolphines win!!");
    console.log("All minimum requirements satisfied.");

  } else {

    if (Dolphine_Avg === Koalas_Avg) {
      console.log('Both Teams DRAW !');
    } else {
      console.log('No team wins the Trophy');
    }
  }

} else {
  console.log("None of the two teams satisfies the minimum requirements !!");
}

//.........................................................................................................
// Coding challenge #4
const bill = 275;
const tip = 50 >= bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`);
*/

/*
// Coding challenge On data structures.
// Challenge #1 and #2
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        // Bayern Munich
        [
            'Neuer',
            'Parvad',
            'Martinez',
            'Alaba',
            'Davis',
            'Kimich',
            'Goretzka',
            'Koman',
            'Muller',
            'Gnarby',
            'Lewandoski',

        ],
        // Borussia Dortmund
        [
            'Burk1',
            'Schulz',
            'Humels',
            'Akanji',
            'Hakini',
            'Weigl',
            'Witsel',
            'Harzard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    Score: '4-0',
    Scored: ['Lewandoski', 'Gnarby', 'Lewandoski', 'Humels'],
    date: 'Nov 9th, 2018',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.25,
    },
};
// Question 1
const players1 = game.players[0];
const players2 = game.players[1];

// Question 2
// Bayern Munich 
const [gk, ...fieldplayers] = game.players[0];
console.log(gk);
console.log(fieldplayers);

//An array of 22 players
const allplayers = [...players1, ...players2];
console.log(allplayers);

// adding two arrays
const substitutes = ['Thiago', 'Courtino', 'Perisic'];
const playersFinal = [...game.players[0], ...substitutes];
// creating variables
console.log(playersFinal);
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// function printGoals
const printGoals = function(...arbitrary_players) {
    console.log(`${arbitrary_players.length} goals were scored!!`); // count the number of elements in the array

}
printGoals('Davis',
    'Kimich',
    'Muller',
    'Lewandoski'
);
printGoals(...game.Scored); // breaks the number of players into 4 'String[]'

// Question 7
// && continues the operation when 1 is evaluated to true but || short circuits when a true value is found.
team1 < team2 && console.log('Team1 is more likely to win');
for (const [key, value] of game.Scored.entries()) console.log(key, value); // returns an array containing key and value

for (const item of game.Scored.entries()) {
    // printing a nice Item list beginning at 1
    console.log(`Goal ${item[0] + 1}: ${item[1]}`);
}

// loop for averages
const show_odds = Object.values(game.odds);
// console.log(show_odds);
let sum_avg_odd = 0;

for (const all_odds of show_odds) {
    sum_avg_odd += all_odds;
    // console.log(all_odds);
}
console.log(sum_avg_odd / 3);

// Nice formatted way

console.log(`
  Odd of victory of ${game.team1}: ${team1}
  Odd of draw: ${draw}
  Odd of victory of  ${game.team2}: ${team2}`);

// creating of an object
function Scorers() {
    this.Gnarby = 1;
    this.Humels = 1;
    this.Lewandoski = 2;
}
const scorers = new Scorers();
console.log(scorers);

// Alteratively
const scorers1 = new Object({
    Gnarby: 1,
    Humels: 1,
    Lewandoski: 2,
});
console.log(scorers1);
*/

/*
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);
// Coding challenge #3
// Array set f unique events
const events = [...new Set(gameEvents.values())];
console.log(events);

//Remove 64th minute yellow card
gameEvents.delete(64);
console.log(gameEvents);

//Average event happen time
console.log(`
  An event happened, on average, every ${90 / gameEvents.size } minutes.
  
`); // String Literal

// print event and in it's halve
const time = 45;
for (let [key, value] of gameEvents.entries()) {
    const string = key < time ? `[FIRST HALF] ${key} : ${value}` : `[SECOND HALF] ${key} : ${value}`;
    console.log(string);
};

console.log(`\t \n  Alteratively \n \t`); // \t for tabs. \n for next line. 

// Alteratively
for (const [min, events] of gameEvents.entries()) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`${half} HALF ${min}: ${events}`);
}
//Return the last elementof the keys
const LanTime = [...gameEvents.keys()].pop(); // pop () returns the last element of the array
console.log(LanTime);
*/

/*
// forEach method now on Arrays
const oddNums = [7, 5, 3, 671];
// The forEach() on arrays is a Higher order fn where three args are passed value , index ,array
oddNums.forEach(function (value, index, array) { // these offcourse can have other names
  if (value < 100) {
    console.log(`${ index + 1 }: ${ value }`);
  } else {
    console.log('Greater than 100');
    console.log(`${ index + 1 }: ${ value }`);
  };
});

// Execution context 
const name = 'Imani';

function first () {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x,y) {
  var c = 2;
  return c;
};

let x = first();
console.log(x);
x = second();
console.log(x);

let firstName; 
// Scoping in java script
const calcAge = function (birthYear) {
  const age = 2022 - birthYear;
  console.log(`${ firstName } is ${ age } years young`);
  
  const printAge = function () {
    const output = `You are ${ age }, born in ${ birthYear }`;
    console.log(output);

    if (1981 >= birthYear <= 1996) {
      console.log('Congrats you are a Millenial,',`${firstName}`); // scope chain look-up is in the global scope
    }
  }
  // function call
  // printAge();
  printAge.call();

  return age;
};
// let firstName = 'Imani'; // will be accessible because the variable firstName has been declared  before the function call thus exists in the memory.

// In hoisting we could also do:-
firstName = 'Imani';
calcAge(1991);

*/

/*
// using the var keyword to declare variables is prohobited this is because in hoisting it first creates an undefined variable which is later to be reassigned and causes bugs
// functions also declared with the let and const keywords also conform to the same hoising rules

// function call before declarations
add(2, 3);

function add (a, b) {
  console.log(a + b);
};

// console.log(subtract(2,7));  // subtract is not a function because we are typically doing this:-
// undefined(2,7); this is because the var keyword is hoisted to UNDEFINED 

// const and let return reference error that cannot access before initialization

const subtract = function (a, b) { // try with const and let .... uncomment line 758
  return Math.max(a, b) - Math.min(a, b);
};

console.log(subtract(2, 7));
console.log(subtract(7, 2));
*/

/*
// NOTES
// The this keyword never points to:-
// 1. variable environment of the function
// 2. the function in which we are using it.

// Instead it points to the object calling the method.

// NOTE:- arrow fns do not get their this keyword it will simply be the be the this keyword of the sorrounding function called 'lexical this keyword'- it gets picked up from the outer lexical scope of the arrow function. // ie the parent scope

const measurement = {
  firstName: 'Steven',
  height: "168",
  shoe: 8,
  weight: "71",
  year: 1923,

  calcAge: function () { // parent scope
    console.log(this); //refer line 778
    console.log(`${ this.firstName } is ${ this.height }m tall`);

    // 1. Use an extra variable self to preserve the this keyword as it exists here in the parent to the isMillenial function
    const self = this;
    const isMillenial = function () { // child scope
      // console.log(this); // remember that a regular function call has the this keyword set to undefined 
      console.log(self); // it's now the Jonas object#
      
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996); // 1923 //false
  
    };
    isMillenial(); // This method will be called as soon as we call the measurement.calcAge()
    // A more modern solution 2. is to use an arrow function as you know has access to the this keyword of parent scope
    const checkMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996); // also returns false it uses the parent's this
    };
    checkMillenial();

  },

  greet: () => console.log(`His weight is ${ this.weight }`),

};
// function call
measurement.calcAge(); // this keyword from line 789 points to the measurement object.

// This line removes the below error *undefined
var weight = '106 pounds'; // but we shouldn't use var

// error on purpose refer line 780
measurement.greet(); // His weight is 'undefined'  // parent scope here is the global scope not the measurement object
// This becomes dangerous as var  actually creates properties in the global object.
// let and const do not.

// The above line could work if we use the knowledge from below and use var in the creation of a firstName property in the global object.
let x = 1;
const y = 2;
var z = 3;

// to check if it does create a property on the global object.
if (z === window.z) {
  console.log('exists');
};
//  check for let
if (x !== window.x) {
  console.log('does not exist');
};
// check for const
if (y !== window.y) {
  console.log('does not exist');
};

console.log(this); // points to the window objects in the global scope

// arguments keyword also exists only in regular function expressions and not in arrow functions
// it is used when we want to give arguments more than the one given in the function declaration

function add (a, b) {
  console.log(arguments);
  console.log(a + b);
};

add(2, 4, 5, 7, 8, 9, 10,);
// we then use the arguments array to loop over the array so as to use the arguments
// this is not used in modern javaScript because there is a better method that we can use. 
*/

/*
// Objects copying 
let age = 30;
const oldage = age;
age = 31;

console.log(age, oldage);

const me = {
  first_name: 'Davis',
  last_name: 'williams',
  age: 24,
  sports: ['football', 'basketball', 'volleyball'], // an object
};

const friend = me;
// suppossing the friemd is 27 aand we want to change hhis/her age 
friend.age = 27;
friend.last_name = 'karani'
// console.log(friend); // output is as expected
// console.log(me); // is also has the changed age which should not be the case. // refer to screenshot.


// To overcome this we can do 
// has a limitation in that it creates a shallow copy 
// in that if there exists another object in this object then it would still result in the same error we saw above.
const other_friend = Object.assign({}, friend);


// Object.assign({}, friend); // we merge an empty object to the one whose name we want a copy.
other_friend.age = 31;
other_friend.last_name = 'Gitau';
other_friend.sports.push('netball', 'handball');
// When we log even the copy is still changed
console.log(other_friend);
console.log(friend);

// later on we we learn how to import and use the 'Lo-Dash' library to give us the deep clone feature to be able to do this.
*/

class Car {
  constructor (model, productionYear) {
    this.model = model;
    this.productionYear = productionYear;
  };
  // A class method that return the age of the car
  age () {
    let date = new Date();
    // The day starts counting from Monday = 1;
    console.log(date.getDate(), date.getDay());

    return date.getFullYear() - this.productionYear;

  };
};


// using classes to  create objects as in:- 
const myCar = new Car('Audi', 2021);
console.log(myCar);
console.log(myCar.age());

// JavaScript Object Notation(JSON); -NB it is language independent
// It is a format for storing and transporting data - used when data is transported from a server to a web page.
// It can be used to send data between computers.
// First create a javascript string containing JSON syntax.
let text = '{"name":"John","birth":"1986-12-14", "age":30, "myFunction":"function () {return `${this.name} is ${this.age} years old.`;}" ,"car":null,"bought": false}';
// Second use the javascript built in function JSON.parse() to conert the string into a javascript object
const JsObject = JSON.parse(text);
console.log(JsObject);

console.log(JsObject['age']); // 30  // using bracket notation.

let emptyText = "";
for (let x in JsObject) {
  emptyText += x + ", ";
};
console.log(emptyText);

// JSON does not include functions, dates, undefined
// work around for dates in json text file
JsObject.birth = new Date(JsObject.birth);
console.log(JsObject.birth);

// Alteratively you can use the reviver function
// The second reviver parameter is a function that checks the value before returning the value
const checker = JSON.parse(text, function (key, value) {
  if (key === 'birth') {
    return new Date(value);
  } else {
    return value;
  }
});
// function call
console.log(checker);  // Note:- same output

// You should avoid using functions in JSON, the functions will lose their scope,
// to pass functions in JSON we use eval() to convert them back to functions 
JsObject.myFunction = eval("(" + JsObject.myFunction + ")");
console.log(JsObject.myFunction()); // function call 

// JavaScript has  a built in function JSON.stringfy() that is used to convert javascript objects to JSON.
let myDetails = {
  firstName: 'Proholyce',
  lastName: 'Imani',
  birth_year: 1991,
  job: 'Software Engineer',
  friends: ['You', 'Evans', 'Brian', 'Elizabeth'],
  university: 'Jkuat',
  HomeTown: 'Nakuru',
  Single: true,


  calcAge: function () {
    // this is the object myDetails
    return 2017 - this.birth_year;
  }
};
// functions are not part of the JSON text. -  they are thus removed from the javascript object both the key and the value
// However we can work around this by first converting the function toString();
myDetails.calcAge = myDetails.calcAge.toString(); // prevent the ommission of the function being converted into JSON

const JsonString = JSON.stringify(myDetails);
console.log(JsonString); // JSON string 

// Storing the JavaScript object in the local storage
// Once we stringfy() the object:- 
//  setItem() takes key/value pairs
// first arg is the name(key) which our JSON is to called by
// second args(value) is the JSON 
localStorage.setItem('testJSON', JsonString); // localStorage() is a web API.

// Retrieving the data 
let data = localStorage.getItem('testJSON');
// console.log(data); // JsonString === data (true)

// Sending of the JSON data to a server -:-
// window.location = "demo_json.php?x=" + JsonString; // the file demo_json.php os not currently present 

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "demo_file.php");
xmlhttp.send();