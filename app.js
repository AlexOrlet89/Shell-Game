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
    reset();
    handleGuess(1);
    displayResults();
    
});


button2.addEventListener('click', () => {
    reset();
    handleGuess(2);
    displayResults();
    
});


button3.addEventListener('click', () => {
    reset();
    handleGuess(3);
    displayResults();
    
});

// get user input
// use user input to update state 
// update DOM to reflect the new state

function handleGuess(value) {
    total ++;
    const ballLocation = Math.ceil(Math.random() * 3);
    if (ballLocation === value) {
        wins++;
    }
    if (ballLocation === 1) {
        ball1.classList.add('reveal');
    } else if (ballLocation === 2) {
        ball2.classList.add('reveal');
    } else {
        ball3.classList.add('reveal');
    }
}

function displayResults() {
    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
}

function reset() {
    ball3.classList.remove('reveal');
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
}