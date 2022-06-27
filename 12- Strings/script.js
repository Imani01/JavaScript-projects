'use strict';
// Strings, String Methods and Manipulations
const statement = 'This is String Manipulation';
//String legth
console.log(statement.length);
// using indexOf() and lastindexOf()
// are case senstive
console.log(statement.indexOf('s')); // returns the first occurence
console.log(statement.lastIndexOf('s')); // returns the last occurence
// If we want to print the last word of our string
// Using the slice() method
// Usually given two args the (start,stop)
// The lastIndexOf returns number - 1;
console.log(
  statement.slice(statement.lastIndexOf(' ') + 1, statement.indexOf('.'))
);
console.log(statement.slice(statement.lastIndexOf(' ') + 1)); // prints all the string to the end
// We can also use array methods to manipulate strings
console.log(statement[1]); // gets the h
// Alteratively
console.log('objects'[4], 'find'.length); // to get the c 4
// To log to the console the first word
console.log(statement.slice(statement[0], statement.indexOf(' ')));
// When we slice with a negative value we print value from the last position
const negative = statement.slice(-3); // prints 'on.'
console.log(negative);
// triad
const triad = statement.slice(1, -3);
console.log(triad);
const checkMiddle = function (seat) {
  // B and E are middle seats
  const whichSeat = 'SEAT';
  const comp = seat.slice(-1);
  comp === 'B' || 'E' === comp
    ? console.log(`MIDDLE ${ whichSeat }`)
    : console.log(`OTHER ${ whichSeat }`);
  return whichSeat;
};
// function call
checkMiddle('12A');
checkMiddle('19B');
checkMiddle('5E');

// BOXING
// This is possible because once we call a method on a string js converts the string primitive to a string object
// Thus the method is called on the object
// Clear instance of boxing
console.log(new String('Imani')); // with keys and values.
console.log(typeof new String('Imani')); // object

// then later return the string
console.log(typeof new String('Imani').slice(0)); // string

// To change the case of the string
const cases = checkMiddle('12A');
console.log(cases);
console.log(cases.toLowerCase());

// To Seat
const lowercase = cases.toLowerCase();
const well_formattted = cases.slice(0, 1) + lowercase.slice(1);
console.log(well_formattted);

// Task = compare two emails.
const normal_email = 'imani@yahoo.com';
const entered_email = '    Imani@Yahoo.COM \n \t';
//using the trim()  and tolowerCase() we can check if the two are simlilar
//The trim() removes the whitespaces and special characters
const compare_email = entered_email.toLowerCase().trim(); // can be concatenated as in sets
console.log(compare_email);
// return results
console.log(compare_email === normal_email);
// trimStart() and trimEnd()
console.log(entered_email.trimStart());
console.log(entered_email.trimEnd()); // hence the next console.log() is just below
console.log('Test for new line and tab. Here');

// Replacing parts of a string
// Two arguments one is for the one to  be replaced and the other is the substitute
const replaced = statement.replace('This', 'Topic:');
console.log(replaced);
// Replacing entire occurrence
const repeat = 'What is the statement that is to be printed ?';
// console.log(repeat.replaceAll('is','was'));
// Alternatively
console.log(repeat.replace(/is/g, 'was')); // g is for global // The string to be replaces is written as indicated.

// Stirng methods that return Booleans
// startsWith() and includes() // NOTE :- Are case sensitive.
console.log(statement.includes('Manipulation'));
console.log(statement.startsWith('Th')); /// doesn't have to be the entire word
console.log(statement.endsWith('.')); /// doesn't have to be the entire word

// Practical Exercise
const checkBaggage = function (items) {
  const contents = items.toLowerCase();
  if (contents.includes('nailcutter') || contents.includes('rope'))
    console.log('You are requested to kindly go through the CheckPoint');
  else console.log('Thank Your for Choosing to fly with US');
};
checkBaggage('I have some Snacks, medication and a NailCutter');
checkBaggage('uhh, a RoPE, few CLOTHES, and SHOES');
checkBaggage('some clothes, shoes and a OintMents');

// split() and join()
const my_name = 'Proholyce Imani';
const [first_name, last_name] = my_name.split(' '); // the args given is of the separater
console.log(first_name);
console.log(last_name);

const split_firstName = ['P', 'r', 'o', 'h', 'o', 'l', 'y', 'c', 'e'];
console.log(split_firstName.join('')); // join without any space

// Task
const formatNames = function (name) {
  const capitalize = name.split(' '); // creates an array of the split words // splits without a space
  console.log(capitalize);
  let arr = new Array();
  for (const first_word of capitalize)
  {
    //   arr.push(first_word[0].toUpperCase() + first_word.slice(1));
    //   different way

    arr.push(first_word.replace(first_word[0], first_word[0].toUpperCase()));
  }
  console.log(arr);
  console.log(arr.join(' '));
};
formatNames('peter kenneth waruiri waruingi');
formatNames('raila amollo odinga');
formatNames('gichagua ruto');

// Padding of a string: - This is the adding of extra characters to a string
// It also has padStart() and padEnd() similar to trim()
// The first argument is the desired lenght of the sirng we want to modify
// The second is by which character or words we are adding
const pad_statement = 'This is the test pad statement';
console.log(pad_statement.padStart(41 - 4, 'Intro: ')); // reduce as it fills the remaining statement with the same statement until the stated length is achieved

const name_pad = 'imani';
const see = name_pad.padStart(7, '+').padEnd(10, '--');
console.log(see);
console.log(see.length); // 10
// since the intitial string contains 5 characters only 7-5 characters are added at the beginning .
// The total string now contains 7 character and 10-7 characters are added with padEnd()
// Thus the new string contains a length of 10

// Real world application of masking
// Displaying of M-Pesa statement numbers
// Displaying of Bank account numbers

// This is for credit card number
// last 2 only displayed
const mask_num = function (number) {
  // const string_num = number.toString();
  const num_string = number + ''; //recall when we add to a sting a number type coercion to string is done.

  const masked = num_string.slice(-2);
  return masked.padStart(num_string.length, '*'); // We would write 10 but incase the user added +2547 we would have to manually change again and that isn't DRY.

};
// function call
const see1 = mask_num(721881072);
console.log(see1);

// Task 07******72   // Achieved
// condition the number is read without the preceeding 0
const M_Pesa = function (num) {
  const new_pesa = num + '';
  const resolved = 0 + new_pesa[0] + new_pesa.replace(new_pesa.substring(0, 7), '*'.repeat(6));
  console.log(resolved);

};
// function call
M_Pesa(721881072);
M_Pesa(708419411);
M_Pesa(788122882);

// Repeat function
// Arguments is the number of  times to repeat
const message = 'Forma';
const numbers = 133737;
console.log(message + 't'.repeat(2) + 'ing'); //Formatting

// returns the character at the specified index
console.log(message.charAt(3)); // takes the index

// concat() 
console.log(first_name.concat(' ', last_name));

// raw() - It's used to get the raw string form of template literals, that is, substitutions
const repository_path = String.raw`./Home/g-root`;
console.log(repository_path);

// The valueOf() method returns the primitive value of a String object. 
const string_Obj = new String('Imani');
console.log(string_Obj); // typeof Object
console.log(string_Obj.valueOf()); // Imani

// emoji literals
const emoji = function (count) {
  console.log(`There are ${ count } planes: ${ '✈'.repeat(count) }`);
};
emoji(3);
emoji(10);
emoji(7.2); // The decimal is truncated
