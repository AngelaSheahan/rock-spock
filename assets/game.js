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
playerImage.alt = choices[playerChoice];

let computerChoice = Math.floor(Math.random() *5);

computerImage.src = `assets/images${choices[computerChoice]}.png`;
computerImage.alt = choices[computerChoice];

let result = checkWinner(choices[playerChoice]), choices[computerChoice];

updateScore(result);

}

/**
 * Check to see who the winners is. Pass 2 strings ....
 */