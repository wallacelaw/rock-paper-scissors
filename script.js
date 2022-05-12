const choice = ["Rock", "Paper", "Scissors"]
let playerChoice;

function computerPlay() {
    return compChoice = choice[Math.floor(Math.random()*choice.length)];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Tie!";
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Please select either Rock, Paper, Scissors");
        console.log(playRound(playerChoice, computerPlay()));
    }
}

game();