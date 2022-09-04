# ROCK, PAPER, SCISSORS, LIZARD, SPOCK<br/>
This game was first introduced in the television series, The Big Bang Theory. It is a game of chance, where the player selects one of five hand symbols, Rock, Paper, Scissors, Lizard, Spock. The Computer is then programmed to randomly select one of these hand symbols also. Either the player or the computer wins based on inbuilt rules eg. Rock beats Lizard and Scissors, etc. There are 5 rules displayed on the Homepage of the game. Each game consists of 10 rounds. The winner is the one with the highest score. There is also an inbuilt awards system that only applies to the player. When the player wins 2 rounds consecutively in the game he/she is awarded a Bronze trophy, 3 rounds consecutively, a Silver trophy and 5 rounds consecutively, a Gold trophy. These awards are displayed via modals. When the game is over the player can opt to exit the game or play a new game.

## FEATURES

### 1. **Game Introduction Screen/Homepage** <br/>
This consists of a:<br/>The Login form<br><br/>![login Screen Part 1](/assets/images/loginsection.png)<br/><br/>The Player enters his/her name in the 'Enter name:' form field and clicks on the PLAY button to start a game.<br/><br/>The 'How to Play' section <br/><br/>![How to Play screen](/assets/images/howtoplaysection.png)<br/>This gives a basic overview of the game and the rules on how to determine the round winner.<br/><br/>An embedded YouTube video<br/><br/><br/>![Big Bang Theory](/assets/images/game%20video.png)<br/>A Rock Paper, Scissors, Spock Youtube video from where the game originated, the brillant series, The Big Bang Theory!




### 2. **Error Message (Modal)**<br/>
If the player does not enter his/her name, but clicks on the PLAY button, an error message will appear in the form of a modal. The text on the modal window will display "Please enter your name". You can close this modal window but clicking on the 'x' symbol only.
![No Name Added error message in the form of a Modal](/assets/images/NoNameModal.png)

### 3. **Game Screen**<br/>
This is divided into 3 areas:<br/>
### **Player Game Area:**<br/>
The players' name is carried through to this screen (The player name is stored in a Cookie). A Welcome message appears at the top of the screen (under the choice list); in this case the message is, 'Welcome Angela!'.<br/>

### A Score Counter.<br/>
This appears on the line below the welcome message eg. 'Player Score: 0'.<br/>A Pictorial Image of the game, *'Rock, Paper, Scissors, Spock'*, appears underneath the welcome message.<br/>**Computer Game Area:**<br/>The player is playing against the computer, so a Computer score counter: 0 is displayed. A pictorial representation of game also appears.<br/>A **List of the game awards system rules**<br/><br/>
![Game Screen section 1](/assets/images/gamescreen1.png)
![Game Screen section 2](/assets/images/gamescreen2.png)

### 4. **How to Play**<br/>
The player selects one of the hand symbols by clicking on it. At the same time, the computer randomly generates a choice of hand symbol also. The score counter of the winner (The winner rules are displayed on the Homepage) is then updated/increased.<br/><br/>
![Player wins screen](/assets/images/playerwins.png)
![Computer wins screen](/assets/images/computerwins.png) <br>

Where both the player and the computer pick the same hand symbol, no one wins. The score counter is unchanged, and a 'Round is tied' message appears at the top the screen above the players score. <br/><br/>
![Round is tied screen](/assets/images/tiedround.png) </br>
### **5. The Awards Scheme**<br/> 
When the player wins 2 consecutive rounds in the same game, they win a Bronze award. This is displayed in a modal with the snappy caption, 'You Rock'.<br/><br/>![Bronze](/assets/images/bronzewinnerModal.png)<br/><br/>When the player wins 3 consecutive rounds in the same game, they win a Silver award. This is displayed in a modal with the snappy caption, 'Your Share a Paper'.<br/><br/>![Silver](/assets/images/silverwinnerModal.png)<br/><br/>When the player wins 3 consecutive rounds in the same game, they win a Gold award. This is displayed in a modal with the snappy caption, 'You Cut the Computer to Shreds'.<br/><br/>![Gold](/assets/images/goldwinnerModal.png)<br/><br/>
**New Game/Exist Game Section**<br/>
When the game counter reached 10 rounds (excluding tied rounds), a Modal appears on the screen. The player can click the 'New Game' button or the 'Exit Game' button. <br/><br/>![New Game/Exit Game Modal](/assets/images/selectexitgameonModal.png)<br/><br/> If the player clicks on the New Game button, they jump back to the Game screen where their name is carried forward, and the player and computer scores are initialised.<br/><br/>![New Game screen](/assets/images/newgamescreen.png)<br/><br/> If the player clicks on the Exit Game button, all scores are initialised and the Homepage opens. The name field is cleared for the next players name.<br/><br/>![Exit Game screen](/assets/images/exitgamescreen.png)<br/><br/>
<br/><br/>
<br/><br/>
## USER EXPERIENCE/USER INTERFACE<br/>
Site Goals:
- To display the online game, Rock, Paper, Scissors, Lizard, Spock.
- To display a game that is highly intuitive; meaning the user will easily be able to navigate this game with little instruction and prompt.
- To capture the players name and use it throughout the game, so as to personalise the player experience. The name is captured by ensuring the player enters their name (in a form field) before they can proceed with the game. The name is stored in a cookie. If the player does not enter their name and clicks on the PLAY button, an error message will appear in the form of a modal. The players name then appears in round winner and game winner messages.
- To facilitate a player playing against the computer. To do this the creator must code the game so that the computer randomly selects either Rock, Paper, Scissors, Lizard, Spock.
- To give the player an enjoyable experience by incorporating a fun, awards based feature. This is provided for in the form of the 'award modals', Bronze, Silver, Gold. Each modal displays a trophy colour based on the number of consecutive wins and a snappy, fun message.
- To provide a quite, snappy game; not too long for the player to lose interest; not too short to demotivate the player. Each game consists of 10 rounds (tied rounds are not included in this number).
- To clearly display the up-to-date score of the players, the round winner, and the game winner. Each participants (player and computer)score is clearly displayed above their game logos. The round winner is displayed above the scores eg. 'Computer wins this round'. The game winner is displayed in a modal that pops up after the game has completed 10 rounds. This modal displays that the game has ended, the winner & score (e.g. 'Angela wins the game 6- 4'), and two buttons (New Game and Exit Game)
- To give the player the opportunity to play a new game or exit the game after the game is over. This is clearly provided for in a modal that pops up after game has ended. Player can select either the New Game or the Exit Game button. There is no confusion over which button the player selects, as the button will change colour when the mouse hovers over it.
- To be game that is responsive to the user; hence it changes in response to the user’s device.<br/><br/>

<u>User Stories:</u>
- As a user, I want to be provided with clear, concise instructions on how to play the game.
- As a user, I want the homepage of the game to be easy to navigate and eye catching so as to peek my interest to make me actually want to play the game.
- As a user, I want to be able to login to the game without difficulty.
- As a user, I want my login name to be captured and used in the game. Otherwise I would not see the point in having to enter my name.
- As a user, I want to be to select either Rock, Paper, Scissor, Lizard, Spock.
- As a user, I want to be able to clearly see my score and I want it be updated after each win.
- As a user, I want to be able to clearly see the computers score.
- As a user, I want to be able to clearly see who wins each round.
- As a user, I want to be able to see who won the game and what their score is.
- As a user, I want to have the choice to either exit the game or play a new game.<br/><br/>
## TESTING
### <u>Validator Testing</u>
### HTML
I used the Lighthouse Validator to test my HTML.<br/><br/>![Lighthouse Validator results](/assets/images/lighthouseResults.png)<br/><br/>
### CSS
I used the W3C Validator Service. This test did not find any errors in my CSS!<br/><br/>
![W3C Validator Result](/assets/images/jigsawValidatorResult.png)<br/><br/>
### JAVASCRIPT<br/>
I ran the JSHint Validator. The results disclosed no error, some metrics, 35 warnings and some unused variables.<br/>![JSHint results Part 1](/assets/images/JSHintResultsPart1.png)<br/>![JSHint results Part 2](/assets/images/JSHintResultsUnusedVariables.png)<br/><br/>

### MANUAL TESTING <br>
|**Features**|**Expect**|**Action**|**Result**|
|-----|------|-----|--------|
|Embedded youtube video|Video on game homepage opens and runs correctly|Player clicks on play btn below video..<br/>Player clicks on pause btn below video.|
|Form PLAY btn|Form submits when player enters nane and the PLAY btn is clicked|Enter player name and click on PLAY btn|Game screen opens.<br/>Welcome [player name] msg appears.|
|(Enter your name:) Modal| Modal to pop up stating 'Please enter your name'|Clicked PLAY button without entering name|Correct Modal appeared|
|Game window|Game window to open with 'Welcome[playername]' msg on top| Player name entered in form field and PLAY btn clicked| Game window opened with e.g. Welcome Angela! displayed|
|Rock, Paper, Scissors, Lizard, Spock btns|A pic of representing player choice to appear under 'Player score' field.<br/>A pic representing the computers random choice to appear under 'Computer score' field.<br/>The winner of this to appear above score field e.g. 'Computer wins this round'.<br/>The winners score to be entered in the score field e.g. 'Computer score: 1.|Click on btn|All results were as expected|
|Bronze Award Modal|This modal pops up when player wins twice.|player make their choice by clicking on a btn and luckily wins twice.|Bronze Award Modal appears|
|Identical hand images.<br/>'Round is tied' message.<br/> Score counter.<br/>Round counter.|'Round is tied' message to appear when identical hand images are displayed.<br/>Score counter is unchanged.<br/>The Round counter is unchanged.|Player makes a choice by clicking a button. Computer makes a random selection. Both choices are the same.|Screen displays the same hand images.<br/>'Round is tied' message appears.<br/>Score counter remain unchanged.<br/> Tied round is not included in the round counter; hence Round counter remains unchanged.|
|Silver Award Modal|This modal pops up when player wins three times.|A player makes their choice by clicking on a btn and wins three times.|Silver Award Modal appears|
|Gold Award Modal|This modal pops up when player wins five times.|Player makes their choice by clicking on  btn and wins five times.|Gold Award Modal appears|
|Game Ended Modal|Game Ended Modal to appear when game counter reaches 10|Player take 10 goes (rounds) in the game by clicking on the game btns|The Game Ended Modal appears on the screen.|
|The New Game Btn on the Game Ended Modal|The Game screen to appear.<br/> New Game [player name] msg to appear on the game screen.<br/>The score counter for player and computer to be initialised.<br/>The round counter to be initialised.|Player clicks on the New Game btn.|All results were as expected|
|The Exit Game Btn on the Game Ended Modal|The Homepage screen to appear.<br/>The name field will be empty.|Player clicks on the Exit Game btn.|All results were as expected.|

### Testing User Stories
 **Expectation:**
 As a player, I want to be provided with clear, concise instructions on how to play the game.<br/>

 **Result:**
 As a player, I understand how to play this game as this information is displayed clearly int the 'How to play' section and the 'Rules to determines round winner' table on the homepage of the game.<br/>

 **Expectation:**
 As a player, I want the homepage of the game to be easy to navigate and eye catching so as to peek my interest to make me actually want to play the game.<br/>
 
 **Result:**
 As a player, I can easily navigate the homepage; the content is clear and concise, the page is not overloaded with information and the embedded youtube video is very funny and demonstrate to me how the game is played.<br/>

 **Expectation:**
 As a player, I want to be able to login into the game without difficulty.<br/>

 **Result:**
 As a player, I can login without difficulty by entering me name and then clicking on the PLAY button. If I do not enter my name and click on the PLAY button, a modal with pop-up to remind me to enter my name before I can proceed with the game.<br/>

 **Expectation:**
 As a player, if I am going to give my name I want my login name to be captured and used in the game.<br/>

 **Result:**
 As a player, after I enter my name and click on the PLAY button, I see a 'Welcome [player name]!' message appear on the game screen. e.g. 'Welcome Angela!'. Also, when I win a round, the message 'Angela wins this round' appears. In addition, if I win the game, my name is used in the winner messge e.g. 'Angela wins game 7 - 3'. Finally, if I opt to play a new game, the message 'New Game Angela!' appears. I like this personal touch and it makes me want to proceed with the game and play another game.<br/>

 **Expectation:**
 As a player, I want to be to select either Rock, Paper, Scissor, Lizard, Spock.<br/>

 **Result:**
 As a player, I can easily make a choice by clicking on either of the Rock, Paper, Scissor, Lizard, Spock buttons at the top of the game screen. I can clearly see which I am selecting as the button changes colour when I hover my mouse over it.<br/>

 **Expectation:**
 As a player, I want to be able to clearly see my score and I want it be updated after each win.<br/>

 **Result:**
 As a player, if I win the round my score counter is updated. This is clearly displayed above my most recently selected hand image.<br/>

 **Expectation:**
 As a player, I want to be able to clearly see the computers score and I want it be updated after each win.<br/>

 **Result:**
 As a player, if the computer wins the round, I can see its score counter updated. This is clearly displayed above the computers most recently selected hand image.<br/>

 **Expectation:**
 As a player, I want to be able to clearly see who wins each round.<br/>

 **Result:**
 As a player, I can clearly see who wins each round as message is clearly displayed above the score counter between the two choice images. eg. 'Angela wins the round'.<br/>

 **Expectation:**
 As a player, I want to be able to see who won the game or if the game was tied, and what the final score was.<br/>

 **Result:**
 As a player, I can clearly see who won the game and the final score as a 'Game Ended!' Modal appears when the game counter reaches 10. This modal also clearly displays who won or if the game was tied and the score e.g. 'The game is tied 5 - 5' or 'Angela wins game 6 - 4'.<br/>

 **Expectation:**
 As a player, I want to have the choice to either exit the game or play a new game.<br/>

 **Result:**
 As a player, I can easily play a new game or exit the existing game but clicking on the 'New Game' or 'Exit Game' buttons on the Game Ended Modal. If I click the 'New Game' button, the game window will open, and my name will appear as a message 'New Game Angela!' at the top of the screen, underneath the choice buttons. The Player Score and Computer Score will revert back to zero. If I click the Exist game button, the game homepage will appear.<br/>

### UNFIXED BUGS
There are no unfixed bugs, thank goodness!!

### LEARNINGS
Mentor advised to re-write if/else statement in my JavaScript file as a Switch Statement. However on my research, I discovered that I cannot add multiple conditions as needed in each case, hence I had to leave my if/else statement. This runs correctly, so I am happy!

### DEPLOYMENT
- In the GitHub repository navigate to the settings tab.
- From the Source Section drop-down menu, select the Master Branch.
- Once the Master Branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here ![]() <br/>


### CITATION OF SOURCES

### FUTURE FEATURES
- Store highest score of the last 5 users of the game in database for player to see.
- Scorebord to be updated after 2 week?
     - Source Json scorebord code.
- Option to play against another player instead of the computer.
- Create a suite of games, commencing with the game, X and 0.



