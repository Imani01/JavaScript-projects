'use strict';

// function are just values and are very improtant as in functional programming
// We could do the above in one line as 
const greetArr = greeting => name => console.log(`${ greeting } ${ name }`);
// function call 

greetArr('Wakywaky')('Imani');
// same output concept 
const greet_user = greetArr('Karibu');
greet_user('Proholyce');

// returning functions from arguments
const wave = () => console.log('Hey,✋ ');
['first_name', 'second_name', 'surname'].forEach(wave);

// arrow fn
const add = (a, b) => a + b;
console.log(add(14, 3));

// use fruntions and call them inside as seen in DOM manipulation
const todo = () => console.log('Body has been clicked');
document.body.addEventListener('click', todo); // we pass it as a value //why functions are called first class citizens

const flight_number = 'LCU37A';
const flight_call = 'LC';
const person = {
    name: 'Imani',
    destination: 'London',
    passport_number: 37381933,
    age: 21,
};

// NOTE 
const details = function (listen, fli_number, user) {
    fli_number = 'LCU48E';
    user.name = 'Sir ' + user.name;
    console.log(`This is the last call for flight number ${ listen }`);
    console.log(`CheckOfficer: ${ user.name } that is your ${ fli_number } plane call`);

};
// funtion call
details(flight_call, flight_number, person);
// The value of the flight number doesn't change because a copy of the primitive has been made and its the one which has been affected 
console.log(flight_number);
// The value of user.name of the object details has been changed because the reference to the object memory location has passed with the reference 
console.log(person);

// concrete 
const new_passport = function (user) {
    const new_pass = Math.trunc(Math.random() * 111122223);

    user.passport_number = new_pass;

    if (user.passport_number === 37381933) console.log(`Kotoka: Byebye Kenya`);
    else console.log('Kindly wait for your flight number');
};
new_passport(person);

// to see actually that the if block returns false
// we we assign the function call to the user.passport_number
// another function call

// default parameters
const randomplace = function (
    names = 'N/A',
    topography = 120,
    // if this were to be done before initialization of topography it would return an error
    tourists = 3.1 * topography) { // calculations can also be done with the default values 
    console.log(`The No. of Tourists in ${ names } in millions:
Topography of ${ topography } is ${ tourists }`);
};

randomplace('London', undefined, 2.33); // the call is set to undefined if you want to use the default values 
// when called with all the default values
randomplace(undefined, undefined, undefined);

const counter = {
    value: 17,
    increment: function () { //arrow fns cannot use this keyword
        return this.value++;
    },
};
console.log(counter.increment());

// fns taking in other fns and returning from them
// task - fn that accepts a string and returns it without space
let newArray = [];
const oneWord = function (str) {
    str = str.split(' ');
    console.log(str.join(''));
};

// task - fn that cpitalizes the first word of a string
const FstWordCaps = function (str) {
    const [firstletter, ...others] = str.split(' ');
    newArray = [firstletter.toUpperCase(), ...others].join(' ');
    return console.log(newArray);
};

oneWord('This is Himalayas');
FstWordCaps('Kenda bay is located near Australia');

// function as objects also have their methods
// Task - create a fn that modifies the passed strings and returns by which fn

const stringModifier = function (str, fn) {
    console.log(`String Transformed:${ fn(str) } by: ${ fn.name }`); // read the declared name of the function an returns it 
};
stringModifier('This is my home', oneWord);
stringModifier('This is my home', FstWordCaps);

// call the book function with call() and applY() fns - remember it only works on arrays 
// use the spread operator to print the same output as in apply() method
const swiss = {
    airlines: 'Swiss',
    iataCode: 'ksL',
    bookings: [],
    book (name, flight_num) {
        console.log(`${ name } booked a seat on ${ this.airlines } flight ${ this.iataCode }${ flight_num }`);
        // this.bookings.push(book);
        this.bookings.push({ flight: `${ this.iataCode }${ flight_num }`, name: `${ name }` });
    }
};

const Quatar = {
    airlines: 'Quatar',
    iataCode: 'lQp',
    bookings: [],
};

swiss.book(person.name, 353);
swiss.book('Timothy', 142);
// console.log(swiss.bookings);

// create book variable
// use it to declare the this keyword explicitly 
const book = swiss.book; // we use this book function value

// we can call book function also on Quatar as in the following
// in the call() fn the first args is the name of the fn to which to use the this keyword 
// The args then follow respectively
book.call(Quatar, 'Dennis', 77);
book.call(swiss, 'Wanterekini', 89);
// The change is included in the Quatar object it would in the swiss

// We can also use apply where the args are in array format
const data = ['Collins', 317];
// The same order as call is maintained but this time array variable or itself is passed.
book.apply(Quatar, data);
//  not prefered because we have the spread operator makes it easier and can do:
book.call(Quatar, ...data);

console.log(Quatar);
console.log(swiss);

// the bind() function bind the this keyword to as specific function call variable 
// thus we can call it normally
const BookQuatar = book.bind(Quatar);
const BookSwiss = book.bind(swiss);
// Thus 
BookQuatar('Jonas Schmedtmann', 35);
BookSwiss('Jonas Schmedtmann', 36);

// Incase another argument is added to the bind method it is set to always the function call 
const BookQuattar1 = book.bind(Quatar, 'Mustname');
//  The Mustname is set as bound to the function call;
// Thus if we try: // will not work properly
BookQuattar1('Mr. Sleeepy', 27);
BookQuattar1(44); //

// Start Plane Number default
let initial_plane = 300;

// increment once buy button clicked
const increment = function () {
    initial_plane++;
    console.log(initial_plane);
};
//  remove the 'body has been clicked' on the buttons 
const Body_State = document.querySelector('body');
const rm_body_state = function () {
    return Body_State.removeEventListener('click', todo);
}
const pointer = function () {
    console.log('pointerup event handler fn. ');
    increment();
    rm_body_state();
};

const buy_btn = document.querySelector('.buy');
const poll_btn = document.querySelector('.poll');

buy_btn.addEventListener('pointerup', pointer);

const kill_btns = function () {

    // Kill the two btn once the buy and poll activities are done
    buy_btn.removeEventListener('pointerup', pointer);
    poll_btn.removeEventListener('mouseover', mouseOver);
    
}

const mouseOver = function () {
    rm_body_state();
    console.log('mouseover event handler fns');
    alert(`The polls/Number of planes is:${initial_plane} `);
    alert('POLLS CLOSED!!');
  
    // Calls the kill_btns();
    kill_btns();
};

poll_btn.addEventListener('mouseover', mouseOver);



