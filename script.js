"use strict";
let randomNumber = Math.floor(Math.random() * 20) + 1;
let input = document.querySelector("input");
let score = document.querySelector(".score");
let initialScore = 20;
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
    initialScore--;
    score.innerText = initialScore;
  } else if (inputNumber < randomNumber) {
    message.innerText = "📉 Too low!";
    initialScore--;
    score.innerText = initialScore;
  } else if (inputNumber === randomNumber) {
    document.querySelector("body").style.backgroundColor = "green";
    message.innerText = "🎉 Correct Number!";
    secretNumber.innerText = randomNumber;
    if (initialScore > Number(result.innerText)) {
      result.innerText = initialScore;
    }
  }
  if (initialScore === 0) {
    message.innerText = "😟 You lost the game!";
    check.disabled = true;
  }
}
again.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  initialScore = 20;
  score.innerText = 20;
  secretNumber.innerText = "?";
  message.innerText = "Start guessing...";
  input.value = "";
  check.disabled = false;
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
