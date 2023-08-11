'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#06b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber && score > 1) {
    score--;
    document.querySelector('.message').textContent = '📈 Too high';
    document.querySelector('.score').textContent = score;
  } else if (score <= 1) {
    document.querySelector('.message').textContent = '💥 You lost the game';
    document.querySelector('.score').textContent = '0';
  } else if (guess < secretNumber) {
    score--;
    document.querySelector('.message').textContent = '📉 Too low';
    document.querySelector('.score').textContent = score;
  } else {
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
