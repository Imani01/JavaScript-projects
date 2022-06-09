'use strict';

// DOM Data object model 
// console.warn(document.querySelector('.message').textContent);

// to set the value to a number in JavaScript  //html input requires a number 
// document.querySelector('.guess').value = 23;

// Generate a random number from 1 - 20
// Without the +1 the 20 is not included so 1-19;
let number = Math.trunc(Math.random() * 20 + 1);

let highscore = 0;

let score = 20;

// refactoring our code we can use tertiary operations or funcions
// to change the content of the html
const guessMessage = function (message) {
  document.querySelector('.message').textContent = message;  
}


// Function 
document.querySelector('.check').addEventListener('click', function () {  //click is the event we are listening for and the function(){} is what is to implemented once the action we are listening for occurs
  
// note that whenever we read input from the user it is a string 
const userGuess = Number(document.querySelector('.guess').value);
  
//args
if (!userGuess) { //if the user doesn't enter a number
guessMessage('⛔ Not a Number!');
} 
else if (userGuess !== number ) {
  if (score > 1) {
    const result = userGuess < number ? 'Too Low 📉!' : 'Too High 📈!';
    guessMessage(result)
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    guessMessage('💣 You lost the game');
    document.querySelector('.score').textContent = 0;
   }

  } else {  // correct guess
    guessMessage('Correct Answer!');
    
    document.querySelector('.number').textContent = number;

    // style elements in css are written in camelCase and in a string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    };
  };
});

// The again button
document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    guessMessage('Start Guessing');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ' ';

});
