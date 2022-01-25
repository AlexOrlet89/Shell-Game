// import functions and grab DOM elements
const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('Losses');
const totalSpan = document.getElementById('Total');

// let state

let wins = 0;
let total = 0;
// set event listeners 

button1.addEventListener('click', () => {
// console.log('clicked');
//reset reveal class in order to add reveal later.

// ball3.classList.remove('reveal');
// ball1.classList.remove('reveal');
// ball2.classList.remove('reveal');

total++;
const ballLocation = Math.ceil(Math.random() * 3);
console.log('ball is in location', ballLocation);


});

button2.addEventListener('click', () => {
console.log('clicked');
});

button3.addEventListener('click', () => {
console.log('clicked');
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
