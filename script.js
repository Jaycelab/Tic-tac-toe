//init var

const mainContainer = document.querySelector(".main-container"), //selecting the main container
  charSelectX = mainContainer.querySelector(".char-options .pl-x"), //selecting the x character
  charSelectO = mainContainer.querySelector(".char-options .pl-o"), //selecting the o character
  secContainer = docoument.querySelector(".sec-container"), //selecting the section container
  playerTurn = document.querySelector(".player-turn"), //selecting the player turn
  secSpan = document.querySelectorAll(".section span"), //selecting the span of all section spans
  gameResult = document.querySelector(".game-result"), //selecting the game result
  winnerNameText = gameResult.querySelector(".winner-name"), //selecting the winner calling gameResult and selecting the winner name along with the button
  playAgainBtn = gameResult.querySelector("button");
(welcomeSection = document.querySelector(".welcome")), //selecting the welcome section
  (playerName = document.getElementById("playerName")), //selecting the player name
  (secContent = document.querySelector(".sec-content")), //selecting the section content
  (playerNameInput = docoument.getElementById("playerNameInput")); //selecting the player name input

//codeblock to execute after windows finishes loading
window.onload = () => {
  //looping through the span of the section to add the onclick event
  for (let i = 0; i < secSpan.length; i++) {
    secSpan[i].setAttribute("onclick", "clickedBox(this)"); //setAttribute to add the onclick event to each span. This keyword being passed as an argument to the clickedBox function
  }
};
//function to select the character X
charSelectX.onclick = () => {
  mainContainer.classList.add("hide"); //adding the hide class to the main
  secContent.classList.add("show");
  playerName.textConent = "Player X";
};

//function to select the character O
charSelectO.onclick = () => {
  mainContainer.classList.add("hide"); //adding the hide class to the main
  secContent.classList.add("show");
  //adding the active and player class to the playerTurn element
  playerTurn.classList.add("active", "player");
  playerName.textConent = "Player O"; //changing the text content of the playerName element
};

const playerBtn = document.getElementById("playerBtn"); //selecting the player button

//Todo: add the event listener to the player button
playerBtn.addEventListener("click", () => {}); //adding the event listener to the player button
