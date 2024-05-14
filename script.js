"use strict";

//Variables
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const guessBtn = document.querySelector(".guess");
const againBtn = document.querySelector(".again");
const guessNum = document.querySelector(".number");
const img = document.querySelector(".game-img-ducks");
const quack = new Audio("sounds/quack.mp3");

////Sound

//////// Secret Number
let secretNumber = Math.trunc(Math.random() * 25 + 1);
console.log(secretNumber);

//score
let currentScore = 25;
let currentHighScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

guessBtn.addEventListener("click", function () {
  const guess = Number(guessNum.value);

  if (!guess) {
    displayMessage("Please guess a number! 🦆");
  } else if (guess === secretNumber) {
    displayMessage(`You found ${secretNumber} ducks! 🦆`);
    img.src = "img/ducks-2.png";
    quack.play();

    if (currentScore > currentHighScore) {
      currentHighScore = currentScore;
      highScore.textContent = currentHighScore;
    }
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(
        guess > secretNumber ? ` Too many ducks! 🦆` : `Too little ducks! 🦆`
      );
      currentScore--;
      score.textContent = currentScore;
    } else {
      displayMessage(`No more guesses left! 🙁`);
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", function () {
  currentScore = 25;
  secretNumber = Math.trunc(Math.random() * 25 + 1);
  score.textContent = currentScore;
  guessNum.value = "";
  img.src = "img/ducks.png";
  displayMessage(`The ducks are hiding...`);
});
