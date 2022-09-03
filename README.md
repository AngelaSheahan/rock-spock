
List of features:

- Player enters his/her name in the 'Enter name:' form field and clicks on the PLAY button to start a game.
![login Screen Part 1](/assets/images/screen1part1.png)
![login Screen part 2](/assets/images/screen1part2.png)

- If the player does not enter his/her name, but clicks on the PLAY button, an error message will appear in the form of a modal. The text on the modal window will display "Please enter your name". You can close this modal window but clicking on the 'x' symbol only.
![No Name Added error message in the form of a Modal](/assets/images/NoNameModal.png)

- After entering a player name, the player is directed to the game screen. As you can see the players' name is carried through to this screen (The player name is stored in a Cookie). 
     - The 'Welcome Angela!' message appears at the top of the screen. 
     - A score counter appears on the line below the welcome message eg. 'Player Score: 0'.
     - A pictorial image of the game, 'Rock, Paper, Scissors, Spock', appears underneath the welcome message.
![Game Screen Part 1](/assets/images/gamescreen1.png)
![Game Screen Part 1](/assets/images/gamescreen2.png)
















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
