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
const displayMessage = function (str) {
  message.innerText = str;
};
function checkedNumber() {
  let inputNumber = Number(input.value);
  if (input.value === "") {
    displayMessage("⛔️ No number!");
  } else if (inputNumber < 1 || inputNumber > 20 || input.value === "0") {
    alert("PLEASE INPUT NUMBER FROM 1 TO 20");
    input.value = "";
    displayMessage("Start guessing...");
  } else if (inputNumber !== randomNumber) {
    displayMessage(inputNumber > randomNumber ? "📈 Too high!" : "📉 Too low!");
    initialScore--;
    score.innerText = initialScore;
  } else if (inputNumber === randomNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage("🎉 Correct Number!");
    secretNumber.innerText = randomNumber;
    secretNumber.style.width = "30rem";
    if (initialScore > Number(result.innerText)) {
      result.innerText = initialScore;
    }
  }
  if (initialScore === 0) {
    displayMessage("😟 You lost the game!");
    check.disabled = true;
  }
}
again.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  initialScore = 20;
  score.innerText = 20;
  secretNumber.innerText = "?";
  displayMessage("Start guessing...");
  input.value = "";
  check.disabled = false;
  secretNumber.style.width = "15rem";
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
