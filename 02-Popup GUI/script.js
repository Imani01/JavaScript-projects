'use strict';

const show_modalWindow = document.querySelectorAll('.show-modal'); // want to use the buttons to remove hidden
const modal = document.querySelector('.modal'); //the 'hidden' here ought to be removed
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

// loops through every of the three buttons in the show_modalWindow so that when each button upon 'click'
for (let index = 0; index < show_modalWindow.length; index++) {
  show_modalWindow[index].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });  
}

// a refactored code to make our code dry 
// it is used to close both the popup window and the overlay
const return_add = function (statement) {
  overlay.classList.add(statement);
  modal.classList.add(statement); 
}

// We want to close the popup and the overlay oce we click the ❌ button
close.addEventListener('click', function () {
  return_add('hidden');
});

// We want to close the popup once the overlay is clicked and the overlay itself.
overlay.addEventListener('click', function () {
  return_add('hidden');
})

// We want to add a function whereby we can also close the overlay and the popup window once the escape key is pressed
document.addEventListener('keydown', function (e) {
// When listening for ⌨ keyboard events we have 3 options 
  // keydown - during click
  // keyup -when we lift our fingers off a key
  // keypress - when a key is held down
  console.log(e); // print to the console the various key events we can access
  if (e.key === 'Escape' && !(modal.classList.contains('hidden'))) {
    //check if the escape key has been pressed
    //and also if the 'hidden' class is shown or not
      return_add('hidden');
    
  }

});