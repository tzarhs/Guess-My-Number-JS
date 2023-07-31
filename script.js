'use strict';

// console.log(document.querySelector('.message').textContent);

// // document.querySelector('.message').textContent = 'Correct Number!';
// // console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let myNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫 No Number';
    displayMessage('🚫 No Number');

    // When the player wins
  } else if (guess === myNumber) {
    displayMessage('👍 Correct Number!');
    document.querySelector('.number').textContent = myNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      let highscoreName = prompt('You set a new highscore! Enter your name:');
      document.querySelector('.highscoreName').textContent = highscoreName;
    }

    // When the guess is too high
  } else if (guess != myNumber) {
    if (score > 1) {
      displayMessage(guess > myNumber ? ' Too High!' : 'Too Low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  myNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btbsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  // overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
};

// Open Modal and Overlay
for (let i = 0; i < btbsOpenModal.length; i++) {
  btbsOpenModal[i].addEventListener('click', openModal);
}

// Close Modal
btnCloseModal.addEventListener('click', closeModal);

// Open Overlay
// overlay.addEventListener('click', closeModal);

// Close the modal with Esc Key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
