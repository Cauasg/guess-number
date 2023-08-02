'use strict';
// GAME START
let score = 20;
let highScore = 0;

// RANDOM NUMBER
let number = Math.trunc(Math.random() * 20) + 1;

// FUNCTIONS
function displayMessage(message) {
  return (document.querySelector('.message').textContent = message);
}

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  //   SCORE RESTART
  score = 20;
  document.querySelector('.score').textContent = score;

  //   NUMBER RESTART
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  // STYLE RESTART
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');

  console.log(number);
});
console.log(number);

// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No input entered');
  } else if (score > 1) {
    // NUMBER RIGHT
    if (guess == number) {
      displayMessage('You got it right!');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      const newScore = Number(document.querySelector('.score').textContent);
      highScore < newScore ? (highScore = newScore) : highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    // NUMBER HIGHER OR LOWER
    else if (guess !== number) {
      displayMessage(guess > number ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('You lost!');
  }
});
