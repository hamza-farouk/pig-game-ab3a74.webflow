"use strict";

const scoreOne = document.getElementById("score--0");
const scoreTwo = document.getElementById("score--1");
const currentScoreOne = document.getElementById("currentScore-0");
const currentScoreTwo = document.getElementById("currentScore-1");
const playerCornerOne = document.querySelector("#player--0");
const playerNameOne = document.querySelector("#playerOneName");
const playerCornerTwo = document.querySelector("#player--1");
const playerNameTwo = document.querySelector("#playerTwoName");

const diceEl = document.getElementsByClassName("dice-holder");
const btnNew = document.getElementById("btnNewGame");
const btnRollDice = document.getElementById("btnRollDice");
const btnHold = document.getElementById("btnHold");
const diceImage = document.querySelector(".dice");

const switchPlayer = function () {
  // Switch to next player
  curentScoreOne = 0;
  document.getElementById(`currentScore-${activePlayer}`).textContent =
    curentScoreOne;
  activePlayer = activePlayer === 0 ? 1 : 0;

  playerCornerOne.classList.toggle("is-active");
  playerNameOne.classList.toggle("is-active");
  playerCornerTwo.classList.toggle("is-active");
  playerNameTwo.classList.toggle("is-active");
};

//Starting conditions

scoreOne.textContent = 0;
scoreTwo.textContent = 0;
diceImage.classList.remove("is-active");

let scores = [0, 0];
let curentScoreOne = 0;
let activePlayer = 0;
let playing = true;

//Rolling the dice functionality

btnRollDice.addEventListener("click", function () {
  if (playing) {
    // Generate a random dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display the dice
    diceImage.classList.add("is-active");
    diceImage.src = `images/dice-${dice}.png`;

    // Check if one is rolled

    if (dice !== 1) {
      // Add dice to current score
      curentScoreOne += dice;
      console.log(`score--${activePlayer}`);
      document.getElementById(`currentScore-${activePlayer}`).textContent =
        curentScoreOne;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += curentScoreOne;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`#player--${activePlayer}`)
        .classList.remove("is-active");
      document
        .querySelector(`#player--${activePlayer}`)
        .classList.add("winner");

      diceImage.classList.remove("is-active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  scores = [0, 0];
  curentScoreOne = 0;
  activePlayer = 0;
  playing = true;

  playerCornerOne.classList.add("is-active");
  playerNameOne.classList.add("is-active");

  playerCornerTwo.classList.remove("is-active");
  playerNameTwo.classList.remove("is-active");

  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  diceImage.classList.remove("is-active");

  currentScoreOne.textContent = curentScoreOne;
  currentScoreTwo.textContent = curentScoreOne;
  document.querySelector(`#player--${activePlayer}`).classList.remove("winner");
});
