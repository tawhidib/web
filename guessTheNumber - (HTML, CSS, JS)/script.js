"use strict";

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Guess";
document.querySelector(".number").textContent = 10;

document.querySelector(".guess").value = 17;
console.log(document.querySelector(".guess").value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
let guess = "";

document.querySelector(".check").addEventListener("click", function () {
  guess = Number(document.querySelector(".guess").value);
  if (guess) {
    if (guess > 20) {
      score--;
      document.querySelector(".message").textContent =
        "Try again!!! But Enter less than 21...!!!";
    } else if (guess > secretNumber) {
      score--;
      document.querySelector(".message").textContent =
        "Too High...Try again...!!!";
    } else if (guess < secretNumber) {
      score--;
      document.querySelector(".message").textContent =
        "Too Low...Try again...!!!";
    } else if (guess === secretNumber) {
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").textContent =
        "Congratulation...You guess it right...!!!";
      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      // CSS Manipulation
      document.querySelector("body").style.backgroundColor = "#2ecc71";
    }
  } else {
    score--;
    document.querySelector(".message").textContent =
      "Oh!!! You did not enter any number...!!!";
  }

  if (score <= 0) {
    document.querySelector(".message").textContent =
      "You are Fail!!!Please Start Again...!!!";
    document.querySelector(".number").textContent = "!!!";
    document.querySelector("body").style.backgroundColor = "#e74c3c";
    document.querySelector(".score").textContent = 0;
    document.querySelector(".number").style.width = "30rem";
  } else {
    document.querySelector(".score").textContent = `${score}`;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = `${score}`;
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
});
