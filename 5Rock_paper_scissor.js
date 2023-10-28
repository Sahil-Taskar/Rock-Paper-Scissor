const buttons = document.querySelectorAll("button")

const resultEl = document.getElementById("result")

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score")

let playerScore = 0;
let computerScore = 0;


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay())
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissor"]
  const randomChoice = Math.floor(Math.random() * choices.length)
  return choices[randomChoice]
}

function playRound(playerSelection, computerSelction) {
  if (playerSelection === computerSelction) {
    return "it's a Tie!"
  } else if (
    (playerSelection === "rock" && computerSelction === "scissor"
    ) ||
    (playerSelection === "paper" && computerSelction === "rock"
    ) ||
    (playerSelection === "scissor" && computerSelction === "paper"
    )

  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return " You Win! " + playerSelection + " Beats " + computerSelction} else {
       computerScore++;
      computerScoreEl.textContent = computerScore;
    return " You Loose! " + computerSelction + " Beats " + playerSelection
  }
}
