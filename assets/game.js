/**
 * Declare all DOM Elements 
 * */

const buttons = document.getElementsByClassName("controls");
const playerScore = document.getElementById("player-score");
const computerScore= document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messgaes = document.getElementById("messages");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

/**
 * Add EventListeners to all Buttons
 */

for (let button of buttons) {
    button.addEventListener("click" function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {
playerImage.src = `assets/images${choices[playerChoice]}.png`;
}