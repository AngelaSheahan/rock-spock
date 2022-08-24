const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function onLoad() {
    // add button listeners
    let controls = document.getElementsByClassName("controls");
    for (let control of controls) {
        control.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);
        });
    }
    // hide game area initially
    document.getElementById("game-area").style.display = "none";
}

// JS
// window.onload = function() {
//   document.getElementsByClassName("game-area").style.display = 'none';
// };

// Jquery

// $(document).ready(function () {
//     $(".game-area").hide();
// });

// Hide the game-area on page load
// function hideClass() {
//     document.getElementsByClassName("game-area").innerHTML.style.visibility="hidden";
// }

// window.onload = function(){  
//     document.getElementsByClassName("game-area").innerHTML.style.display = "none";  
//     }  


// $(function() {
//     $(".game-area").hide()
// });

// $(window).onload(function(){
//     $(".game-area").hide();
// });

// document.onload = function() {
//     (".game.area").hide();
//   };


// document.addEventListener("DOMContentLoaded", function () {
//     (".game.area").hide();
// });

// Hide the game area until player enters name and presses the PLAY key
// $(".PLAY").click(function(){
//   $(".game-area").show();
// });

/** Creates cookie to store player name. If player name not added and PLAY buttonn clicked, Alert msg appears */

// set player name
function setPlayerName() {
    if (document.myform.player.value == "") {
        alert("Enter your first name");
        return;
    }
    // Cookies are saved in name-value pairs
    setCookie("player", document.myform.player.value, 1)

    // show game area
    document.getElementById("game-area").style.display = "block";
    // hide login area
    document.getElementById("login-area").style.display = "none";
}

// get player name
function getPlayerName() {
    let player = getCookie("player");
    return player;
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
    let computerChoice = Math.floor(Math.random() * 5);

    let playerImage = document.getElementById("player-image");
    playerImage.src = `assets/images/${choices[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerImage = document.getElementById("computer-image");
    computerImage.src = `assets/images/${choices[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    if (choices[playerChoice] == choices[computerChoice]) {
        alert("try again");
        return;
    }

    let winner = getWinner(choices[playerChoice],
        choices[computerChoice]);

    updateScore(winner);

    displayAward(winner);
}

// See who the winners is.
function getWinner(playerChoice, computerChoice) {
    console.log("player choice: ", playerChoice, " computer choice: ", computerChoice);
    if (playerChoice === "Scissors" && (computerChoice == "Paper" || computerChoice == "Lizard")) {
        return "player";
    }
    if (playerChoice === "Paper" && (computerChoice === "Rock" || computerChoice === "Spock")) {
        return "player";
    }
    if (playerChoice === "Rock" && (computerChoice === "Lizard" || computerChoice === "Scissors")) {
        return "player";
    }
    if (playerChoice === "Lizard" && (computerChoice === "Spock" || computerChoice === "Paper")) {
        return "player";
    }
    if (playerChoice === "Spock" && (computerChoice === "Scissors" || computerChoice === "Rock")) {
        return "player";
    }
    return "computer";
}

// Update the winners score.
function updateScore(winner) {
    console.log("winner : ", winner)
    document.getElementById("messages").textContent = ((winner === "computer") ? "computer" : getPlayerName()) + " wins";
    let oldScore = parseInt(document.getElementById(winner + "-score").textContent);
    document.getElementById(winner + "-score").textContent = oldScore + 1;
}


function gameModal(oldScore) {

    console.log("The score is" , + oldScore);
}

    // if (oldScore == 5) {
    //     var modal = document.getElementById("myModal");

function displayAward(winner) {
    console.log("Display award for " + winner);

    let score = parseInt(document.getElementById(winner + "-score").textContent);
    if (winner === "player" && score == 2) {
        console.log(getPlayerName() + " ,You Rock!");
        if (winner === "player" && score == 3) {
            console.log(getPlayerName() + " ,You're Sharp as Paper!");
            if (winner === "player" && score == 5) {
                console.log(getPlayerName() + " ,You Cut the Computer to Shreds!")
            }
        }
    }

    // }
    // if (gamesWon = 3 && player score = "3") {
    //     alert("You'r Sharp as Paper") and display silver trophy;
    // }
    // if (gamesWon = 5 && player score = "5") {
    //     alert("You cut the Paper to Shreds") and display gold trophy;
    // } else
    //     return;

}



