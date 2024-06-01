// Var assignments
const mainContainer = document.querySelector(".main-container"),
  charSelectX = mainContainer.querySelector(".char-options .pl-X"),
  charSelectO = mainContainer.querySelector(".char-options .pl-O"),
  secContainer = document.querySelector(".sec-container"),
  playerTurn = document.querySelector(".player-turn"),
  secSpan = document.querySelectorAll("section span"), //selecting all grids
  //Game Results Section
  gameResult = document.querySelector(".game-result"),
  winnerNameText = gameResult.querySelector(".winner-name"),
  playAgainBtn = gameResult.querySelector("button"),
  welcomeSection = document.querySelector(".welcome"),
  playerName = document.getElementById("playerName"),
  secContent = document.querySelector(".sec-content"),
  playerNameInput = document.getElementById("playerNameInput");

//func to run once windows loads
window.onload = () => {
  //loop to add click event to each available span element
  for (let i = 0; i < secSpan.length; i++) {
    //adding onclick attribute to each span element being looped. The function clickedBox is called when the span is clicked and is set to the current element (this) being clicked. This is being passed as an arg to the clickedBox function
    secSpan[i].setAttribute("onclick", "clickedBox(this)");
  }
};

//event listerner for the character selection button
//character X
charSelectX.onclick = () => {
  mainContainer.classList.add("hide"); //hides the main container
  secContent.classList.add("show"); //displays secContent
  playerNameInput.textContent = "Player X"; //sets the text content of the playerNameInput to Player X
};

//player O
charSelectO.onclick = () => {
  mainContainer.classList.add("hide");
  secContent.classList.add("show");
  playerTurn.classList.add("active", "player"); //adds active and player class to playerTurn
  playerNameInput.textContent = "Player O";
};

//Play Button Display
const playBtn = document.getElementById("PlayBtn");
playBtn.addEventListener("click", () => {
  welcomeSection.style.display = "none";
  mainContainer.style.display = "flex";
  secContainer.style.display = "block";
  secContent.style.display = "block";
});

//Start Game Button
const startGameBtn = document.getElementById("startGameBtn");
startGameBtn.addEventListener("click", () => {
  const name = playerNameInput.value; //gets the value of the user name
  playerName.textContent =
    `${name} ${playerTurn.classList.contains("player") ? "O" : "X"}` ||
    "Player" + playerSign; //sets the text content of playerName to the user name
  secContent.classList.remove("show");
  secContainer.classList.add("show");
});

let playerXIcon = "fas fa-times"; //icon for player X
let playerOIcon = "far fa-circle"; //icon for player O
let playerSign = "X";
let playerSignValue = "X";
let runBot = true; //boolean to check if the bot should run

function clickedBox(element) {
  if (playerTurn.classList.contains("player")) {
    playerSign = "O";
    playerSignValue = "O";
    element.innerHTML = `<i class = "${playerOIcon}"></i>`;
    playerTurn.classList.remove("active");
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class = "${playerXIcon}"></i>`;
    element.setAttribute("id", playerSign);
    playerTurn.classList.add("active");
  }

  //selectWinner();

  element.style.pointerEvents = "none";
  secContainer.style.pointerEvents = "none";

  let randomTimeDelay = (Math.random() * 1000 + 200).toFixed();
  setTimeout(() => {
    bot(runBot);
  }, randomTimeDelay);
}
