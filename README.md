# ROCK, PAPER, SCISSORS, LIZARD, SPOCK<br/>
### <br/>This game was first introduced in the television series, The Big Bang Theory. It is a game of chance, where the player selects one of five hand symbols, Rock, Paper, Scissors, Lizard, Spock. The Computer is then programmed to randomly select one of these hand symbols also. Either the player or the computer wins based on inbuilt rules eg. Rock beats Lizard and Scissors, etc. There are 5 rules displayed on the Homepage of the game. Each game consists of 10 rounds. The winner is the one with the highest score. There is also an inbuilt awards system that only applies to the player. When the player wins 2 rounds in the game he/she is awarded a Bronze trophy, 3 rounds, a Silver trophy and 5 rounds, a Gold trophy. These awards are displayed via modals. When the game is over the player can opt to exit the game or play a new game.

## List of features:

### 1. **Game Introduction Screen/Homepage** <br/>This consists of a:<br/>The Login form<br><br/>![login Screen Part 1](/assets/images/loginsection.png)The Player enters his/her name in the 'Enter name:' form field and clicks on the PLAY button to start a game.<br/><br/>The 'How to Play' section <br/><br/>![How to Play screen](/assets/images/howtoplaysection.png)<br/>This gives a basic overview of the game and the rules on how to determine the round winner.<br/><br/>An embedded YouTube video<br/><br/><br/>![Big Bang Theory](/assets/images/game%20video.png)<br/>A Rock Paper, Scissors, Spock Youtube video from where the game originated, the brillant series, The Big Bang Theory!




### 2. **Error Message (Modal)**<br/>If the player does not enter his/her name, but clicks on the PLAY button, an error message will appear in the form of a modal. The text on the modal window will display "Please enter your name". You can close this modal window but clicking on the 'x' symbol only.
![No Name Added error message in the form of a Modal](/assets/images/NoNameModal.png)

### 3. **Game Screen**<br/>This is divided into 3 areas:<br/>
### **Player Game Area:**<br/> The players' name is carried through to this screen (The player name is stored in a Cookie). A Welcome message appears at the top of the screen (under the choice list); in this case the message is, 'Welcome Angela!'.<br/>
### A Score Counter appears on the line below the welcome message eg. 'Player Score: 0'.<br/>A Pictorial Image of the game, *'Rock, Paper, Scissors, Spock'*, appears underneath the welcome message.<br/>**Computer Game Area:**<br/>The player is playing against the computer, so a Computer score counter: 0 is displayed. A pictorial representation of game also appears.<br/>A **List of the game awards system rules**<br/><br/>
![Game Screen section 1](/assets/images/gamescreen1.png)
![Game Screen section 2](/assets/images/gamescreen2.png)

### 4. **How to Play**<br/>
### The player selects one of the hand symbols by clicking on it. At the same time, the computer randomly generates a choice of hand symbol also. The score counter of the winner (The winner rules are displayed on the Homepage) is then updated/increased.<br/><br/>
![Player wins screen](/assets/images/playerwins.png)
![Computer wins screen](/assets/images/computerwins.png) <br>
### Where both the player and the computer pick the same hand symbol, no one wins. The score counter is unchanged, and a 'Round is tied' message appears at the top the screen above the players score. <br/><br/>
![Round is tied screen](/assets/images/tiedround.png) </br>
### **5. The Awards Scheme**<br/> When the player wins 2 consecutive rounds in the same game, they win a Bronze award. This is displayed in a modal with the snappy caption, 'You Rock'.<br/><br/>![Bronze](/assets/images/bronzewinnerModal.png)<br/><br/>When the player wins 3 consecutive rounds in the same game, they win a Silver award. This is displayed in a modal with the snappy caption, 'Your Share a Paper'.<br/><br/>![Silver](/assets/images/silverwinnerModal.png)<br/><br/>When the player wins 3 consecutive rounds in the same game, they win a Gold award. This is displayed in a modal with the snappy caption, 'You Cut the Computer to Shreds'.<br/><br/>![Gold](/assets/images/goldwinnerModal.png)<br/><br/>
### **New Game/Exist Game Section**<br/>When the game counter reached 10 rounds (excluding tied rounds), a Modal appears on the screen. The player can click the 'New Game' button or the 'Exit Game' button. <br/><br/>![New Game/Exit Game Modal](/assets/images/selectexitgameonModal.png)<br/><br/> If the player clicks on the New Game button, they jump back to the Game screen where their name is carried forward, and the player and computer scores are initialised.<br/><br/>![New Game screen](/assets/images/newgamescreen.png)<br/><br/> If the player clicks on the Exit Game button, all scores are initialised and the Homepage opens. The name field is cleared for the next players name.<br/><br/>![Exit Game screen](/assets/images/exitgamescreen.png)<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
























As a player I want to view the game rules before I decide to play.
- ~~Create a table of rules.~~
The following items to appear on the first page:
- Name Game
- Game Logo
- Game Rules
     <br>

As a player I want to enter my name (so as to keep trace of my score) before I start playing the game.
- ~~Create a form field to enter player name.~~
- ~~Create a PLAY button.~~
- ~~Create an Alert, to display if player presses PLAY button without entering a name.~~
- ~~Save player name to a cookie.~~
- ~~Sourced cookie code from [cookie](http://w3schools.com)~~

The following items to appear AFTER the player has entered a name AND clicked on the PLAY button.
- Game buttons (Rock, Paper, Scissors, Lizard, Spock).
- 2 mini Game Windows (beside each other - one for Player choice, one for Computer choice )
     <br>

As a user, I want my name to appear in the Game Window.
- ~~Create <span> as a placeholder for username.~~
     <br/>

As a user, I want to see a Game Window displaying a hand picture representing my selection.
- Source and crop the hand images. Copy pics to the Images folder.
- Associate each button with the correct hand image.
- Hand image of choice appears in game window.
     <br>
 

As a user, I want to click on a button so as to make a choice.
- ~~Create a button for each of the 5 choices.~~
- ~~Add a 'click' event listener to each button.~~
     <br/>

As a user, I want the computer to make a random choice resulting in a hand picture appearing in the game window to the right of my game window.
        <br/>
   
As a user, I want to clearly see who won the present game.
- ~~Create a Message 'Player Wins' or 'Computer Wins' between the 2 game windows.~~
- ~~Update the score, and display the score beside the winners name (Player or Computer).~~
     <br>

As a user, I want to have 5 goes before the game ends.
- Create an Alert box after 5 goes of game. This will display a 'Play Again' and an 'Exit' button.
         <br/>

As a user, I want to be able to exist the game at any time before the game ends.
- Add an 'Exit Game' button underneath my game window.
        <br/>

As a user, I want the game to display a Winner Alert if I win 2 consecutive games against the computer'
- Create a Winner Alert stating, Player name 'You Rock' and displaying a pic of a Bronze trophy.
    - Source pic of Bronze trophy and save to Images folder.
    <br>

As a user, I want the game to display a Winner Alert if I win 3 consecutive games against the computer.
- Create a Winner Alert stating, player name 'You'r Sharp as Paper' and displaying a pic of a Silver trophy
     - Source pic of Silver trophy and save to Images folder.
     <br/>

As a user, I want the game to display a Winner Alert if I win 5 consecutive games against the computer
- Create a Winner Alert stating, player name 'You Cut The Computer To Shreds' and displaying a pic of a Gold trophy.
     -  Source pic of Gold trophy and save to Images folder.
     <br/>

As a user, I want to be able to see highest score of the last 5 users of the game.
- Scores will be in the form of how many Bronze, Silver and Gold trophies won.
- Stores results in cookie created to store player name. Scorebord to be updated after 2 week?
     - Source Json scorebord code.
     - Add score code to Cookie.


Learnings
- Mentor advised to re-write if/else statement in my JavaScript file as a Switch Statement. However on my research, I discovered that I cannot add multiple conditions as needed in each case, hence I had to leave my if/else statement. This runs correctly, so I am happy!
