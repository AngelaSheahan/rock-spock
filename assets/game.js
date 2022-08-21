
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const messgaes = document.getElementById("messages");
const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function onLoad() {
    let controls = document.getElementsByClassName("controls");
    for (let control of controls) {
        control.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);
        });
    }
}

/** Creates cookie to store player name. If player name not added and PLAY buttonn clicked, Alert msg appears */

// to keep the player name
var playerName;

// set player name
function SetPlayerName() {
    if (document.myform.player.value == "") {
        alert("Enter your first name");
        return;
    }
    // Cookies are saved in name-value pairs
    setCookie("player", document.myform.player.value, 1)
    // playerName = document.myform.player.value;
}

// get player name
function GetPlayerName() {
    // alert(playerName);
    alert(getCookie("player"));
}

// copied setCookie from w3schools
//adds a name/value pair to the cookie string
function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// copied getCookie from w3schools
//finds a specific name in the cookie strring and returns its value
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function playGame(playerChoice) {
    let playerImage = document.getElementById("player-image");
    playerImage.src = `assets/images${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);
    let computerImage = document.getElementById("computer-image");
    computerImage.src = `assets/images${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice],
        choices[computerChoice]);

    updateScore(result);
}

// Check to see who the winners is.
function checkWinner(playerChoice, computerChoice) {
    console.log("player choice: ", playerChoice, " computer choice: ", computerChoice);
    return "computer"
}

// Update the winners score.
function updateScore(result) {
    console.log("winner : ", result);
}