"use strict";
let randomNumber = Math.floor(Math.random() * 20) + 1;
let input = document.querySelector("input");
let scoreStr = document.querySelector(".score");
let score = Number(scoreStr.innerText);
let message = document.getElementById("message");
let check = document.querySelector(".check");
let again = document.querySelector(".again");
let result = document.querySelector(".highscore");
check.addEventListener("click", function () {
  checkedNumber();
});
function checkedNumber() {
  if (Number(input.value) === 0) {
    message.innerText = "⛔️ No number!";
  } else if (Number(input.value) > randomNumber) {
    message.innerText = "↗︎ Too high!";
    score--;
    scoreStr.innerText = score;
  } else if (Number(input.value) < randomNumber) {
    message.innerText = "⬊ Too low!";
    score--;
    scoreStr.innerText = score;
  } else if (Number(input.value) === randomNumber) {
    document.querySelector("body").style.backgroundColor = "green";
    message.innerText = "🎉 Correct Number!";
    if (score > Number(result.innerText)) {
      result.innerText = score;
    }
  }
}
again.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  scoreStr.innerText = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
