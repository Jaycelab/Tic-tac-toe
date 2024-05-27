//init var

const mainContainer = document.querySelector(".main-container"), //selecting the main container
  charSelectX = mainContainer.querySelector(".char-options .pl-x"), //selecting the x character
  charSelectO = mainContainer.querySelector(".char-options .pl-o"), //selecting the o character
  secContainer = docoument.querySelector(".sec-container"), //selecting the section container
  playerTurn = document.querySelector(".player-turn"), //selecting the player turn
  secSpan = document.querySelectorAll(".section span"), //selecting the span of all section spans
  gameResult = document.querySelector(".game-result"), //selecting the game result
  winnerNameText = gameResult.querySelector(".winner-name"), //selecting the winner calling gameResult and selecting the winner name along with the button
  playAgainBtn = gameResult.querySelector("button"),
  welcomeSection = document.querySelector(".welcome"), //selecting the welcome section
  playerName = document.getElementById("playerName"), //selecting the player name
  secContent = document.querySelector(".sec-content"), //selecting the section content
  playerNameInput = docoument.getElementById("playerNameInput"); //selecting the player name input

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

//playBtn event listener that triggers an event listener on click, to display the main container and hide the welcome section
const playBtn = document.getElementById("playerBtn"); //selecting the player button
playBtn.addEventListener("click", () => {
  welcomeSection.style.display = "none";
  mainContainer.style.display = "flex";
  secContainer.style.display = "block";
  secContent.style.display = "block";
});

//Start game button event listener that triggers an event listener on click, to display the section content and hide the section container
//Gets players name from the input field and sets the players name based on the input and the active player X or O
//Toggles the visibility of the sec content and set container
const startGameBtn = document.getElementById("startGameBtn"); //selecting the start game button
startGameBtn.addEventListener("click", () => {
  const name = playerNameInput.value; // gets the value of the player name input field

  playerName.textContent =
    `${name} ${playerTurn.classList.contains("player") ? "O" : "X"}` ||
    "Player" + playerSign; //set the player's name based on the input and the current players if it is X or O
  secContent.classList.remove("show"); //removes the show class from the secondary content and displays the section container instead
  secContainer.classList.add("show");
});

//game related variables
let playerXIcon = "fas fa-times"; //setting the player X icon
let playerOIcon = "far fa-circle"; //setting the player O icon
let playerSign = "X"; //setting the player sign to X
let playerSignValue = "X"; //setting the player sign value to X
let runBot = true; //setting the runBot to true

//click box function for handling the click on users keyboard
function clickedBox(e) {
  if (playerTurn.classList.contains("Player")) {
    playerSign = "O"; //if the player turn contains the player class, set the player sign to O
    playerSignValue = "O"; //if the player turn contains the player class, set the player sign value to O
    element.innerHTML = `<i class = "${playerOIcon}"></i>`; //set the innerHTML of the element to the player O icon
    playerTurn.classList.remove("active");
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class = "${playerXIcon}"></i>`; //set the innerHTML of the element to the player X icon
    element.setAttribute("id", playerSign);
    playerTurn.classList.add("active");
  }
}
