"use strict";
let randomNumber = Math.floor(Math.random() * 20) + 1;
let input = document.querySelector("input");
let scoreStr = document.querySelector(".score");
let score = Number(scoreStr.innerText);
let message = document.getElementById("message");
let check = document.querySelector(".check");
let again = document.querySelector(".again");
let result = document.querySelector(".highscore");
let secretNumber = document.querySelector(".number");
check.addEventListener("click", function () {
  checkedNumber();
});
function checkedNumber() {
  let inputNumber = Number(input.value);
  if (!inputNumber) {
    message.innerText = "⛔️ No number!";
  } else if (inputNumber > randomNumber) {
    message.innerText = "📈 Too high!";
    score--;
    scoreStr.innerText = score;
  } else if (inputNumber < randomNumber) {
    message.innerText = "📉 Too low!";
    score--;
    scoreStr.innerText = score;
  } else if (inputNumber === randomNumber) {
    document.querySelector("body").style.backgroundColor = "green";
    message.innerText = "🎉 Correct Number!";
    secretNumber.innerText = randomNumber;
    if (score > Number(result.innerText)) {
      result.innerText = score;
    }
  }
}
again.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  scoreStr.innerText = 20;
  secretNumber.innerText = "?";
  message.innerText = "Start guessing...";
  input.value = "";
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
