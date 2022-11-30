const info = document.querySelector(".info");
const input = document.querySelector("#input-area");
const guessBtn = document.querySelector(".button");
const restartBtn = document.querySelector(".restart");
const guessedNumInput = document.querySelector(".guessed-num");
const numGuesses = document.querySelector(".numGuesses");
const randomNum = Math.floor(Math.random() * 15 + 1);
let isFinished = false;

let guesses = [];

guessBtn.addEventListener("click", generateNum);

function generateNum() {
  const givenNum = parseInt(input.value);
  guesses.push(givenNum);
  if (!givenNum) {
    info.innerHTML = "Please enter a valid number";
  } else if (givenNum <= 0 || givenNum > 15) {
    info.innerText = "Please Pick a number in the range";
  } else if (randomNum < givenNum) {
    info.innerHTML = "Your guess is too high.";
  } else if (randomNum > givenNum) {
    info.innerHTML = "Your guess is too low.";
  } else {
    guessedNumInput.innerText = randomNum;
    const filteredGuess = guesses.filter((item) => {
      return item != "";
    });
    numGuesses.innerText = filteredGuess.length;
    info.innerHTML = "Your guess is right.";
    isFinished = true;
  }

  input.value = "";
}
restartBtn.addEventListener("click", () => {
  location.reload();
});
