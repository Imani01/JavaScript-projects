'use strict';

const show_modalWindow = document.querySelectorAll('.show-modal'); // want to use the buttons to remove hidden
const modal = document.querySelector('.modal'); //the 'hidden' here ought to be removed
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

for (let index = 0; index < show_modalWindow.length; index++) {
  show_modalWindow[index].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });  
}

const return_add = function (statement) {
  modal.classList.add(statement);
  overlay.classList.add(statement);
}

close.addEventListener('click', function () {
  return_add('hidden');
});

overlay.addEventListener('click', function () {
  return_add('hidden');
})
