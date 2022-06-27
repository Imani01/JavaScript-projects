'use strict';

//  selects the active player
const active_player1 = document.querySelector('.player--1');
const active_player0 = document.querySelector('.player--0');

// Implementing a boolean playing to prevent the buttons from being able to respond once winner is declared
let playing = true;

// the tree buttons in the game
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
// we can use querySelector and the # because it is the class selector for IDs
// display for current
const current_0 = document.querySelector('#current--0');
const current_1 = document.querySelector('#current--1');
// we can also use the getElementById to get acces to IDs 
const score0 = document.getElementById('score--0'); 
const score1 = document.getElementById('score--1');
// We plan to use this to add hidden class.
const playingDice = document.querySelector('.dice');

// keep track of which player is playing
let activeplayer = 1;
let results = [0, 0]; 
// JavaScript Automatically converts them to strings in order to display them on the page
// type coercion
score0.textContent = 0;
score1.textContent = 0;

// Adding the hidden class to the dice image class
playingDice.classList.add('hidden');
let sum = 0;

const switchplayer = function () {
  // switch player    
  document.getElementById(`current--${activeplayer}`).textContent = 0;   
  // re initaialise the sum as if not so it carries forward to the switched player
  sum = 0; 

  // responsible for the switch. - Ternanry operator
  activeplayer = activeplayer === 0 ? 1 : 0;

  //Also change the backround
  //toggle method checks if the class is present if yes then removes it and vice versa 
  active_player1.classList.toggle('player--active');
  active_player0.classList.toggle('player--active');
}



// roll button - generates a random number
roll.addEventListener('click', function () {
  if (playing) {
    // generate a random number
    const rand_num = Math.trunc(Math.random() * 6) + 1;
    playingDice.classList.remove('hidden');   //on click removes the hidden class
    // Displaying the right image depending on the radom number dice rolled
    // We use string literal and common name
    playingDice.src = `dice-${rand_num}.png`;

    if (rand_num !== 1) {
      // add the current score
      // display it in the current score
      sum += rand_num;

      // selecting the element dynamically
      // displays the current score accordingly
      document.getElementById(`current--${activeplayer}`).textContent = sum;
    
    } else {
      // TO DO
      switchplayer();
    }
  }
});

let score = 0;
// result or output 

hold.addEventListener('click', function () {
  if (playing) {
    // Add the current score to the current player score
    results[activeplayer] += sum;
    document.getElementById(`score--${activeplayer}`).textContent = results[activeplayer];
    // check if the current score is >= 100
    if (results[activeplayer] >= 100) {
      document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
      
      // remove the dice once a player wins
      playingDice.classList.add('hidden');
    
      //FIXME  - the game continues even after a player wins
      // set playing to false
      playing = false;
    } else {
      //switch the active player
      // roll();
      switchplayer();
    }
  }

});

const init = function () {
  score = 0;
  sum = 0;
  playing = true;
  results = [0, 0];
  document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
  activeplayer = 1;
  document.querySelector(`.player--${activeplayer}`).classList.add('player--active');

  score0.textContent = 0;
  score1.textContent = 0;
  current_0.textContent = 0;
  current_1.textContent = 0;

}

newGame.addEventListener('click', function () {
  init();
});

