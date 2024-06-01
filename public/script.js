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
  playerNameInput.textContent = "Player O"; //changing the text content of the playerName element
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
  const name = playerNameInput.value; // gets the value of the player name input field
  playerName.textContent =
    `${name} ${playerTurn.classList.contains("player") ? "O" : "X"}` ||
    "Player" + playerSign; //set the player's name based on the input and the current players if it is X or O
  secContent.classList.remove("show"); //removes the show class from the secondary content and displays the section container instead
  secContainer.classList.add("show");
});
//game related variables
let playerXIcon = "fas fa-times"; //icon for player X
let playerOIcon = "far fa-circle"; //icon for player O
let playerSign = "X";
let playerSignValue = "X";
let runBot = true; //boolean to check if the bot should run

//click box function for handling the click on users keyboard
function clickedBox(element) {
  if (playerTurn.classList.contains("player")) {
    playerSign = "O";
    playerSignValue = "O";
    element.innerHTML = `<i class = "${playerOIcon}"></i>`; ////////////////
    playerTurn.classList.remove("active");
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class = "${playerXIcon}"></i>`;
    element.setAttribute("id", playerSign);
    playerTurn.classList.add("active");
  }

  selectWinner();

  //temp disable click events on section  container to prevent multiple clicks
  element.style.pointerEvents = "none";
  secContainer.style.pointerEvents = "none";

  //timeout function to delay the bot move
  let randomTimeDelay = (Math.random() * 1000 + 200).toFixed(); //setting the random time delay to a random number between 200 and 1000
  setTimeout(() => {
    bot(runBot);
  }, randomTimeDelay);
}

// BOT FUNCTION

function bot() {
  let array = [];
  if (runBot) {
    playerSign = "O"; //setting the player sign to O
  }
  //iterating through the secSpan array to check there are any available tiles or sets
  for (let i = 0; i < secSpan.length; i++) {
    //if child element count of the secSpan is 0, push the index of the element to the array
    if (secSpan[i].childElementCount === 0) {
      array.push(i);
    }
  }

  let randomBox = array[Math.floor(Math.random() * array.length)];
  if (array.length > 0) {
    if (playerTurn.classList.contains("player")) {
      playerSign = "X";
      secSpan[randomBox].innerHTML = `<i class = '${playerXIcon}'></i>`;
      secSpan[randomBox].setAttribute("id", playerSign);
      playerTurn.classList.add("active");
    } else {
      secSpan[randomBox].innerHTML = `<i class = '${playerOIcon}'></i>`;
      playerTurn.classList.remove("active");
      secSpan[randomBox].setAttribute("id", playerSign);
    }
    selectWinner();

    secSpan[randomBox].style.pointerEvents = "none";
    secContainer.style.pointerEvents = "auto";
    playerSign = "X";
  }
}

//helper function to check the sign of a specifc tile position
//gets ID value of the specific class. selecting the element with a specific class and replace its id
function getIdVal(classname) {
  return document.querySelector(".tile" + classname).id;
  //takes the paremter class name , which is the class name of the element, which retrieves the id of the element with the specific class name and returns it
}
//checks if three ids have the same sign
function checkIdSign(val1, val2, val3, sign) {
  if (
    //calls getIdVal func to retrieve the id of the element with the specific class name and checks if the id is equal to the sign
    getIdVal(val1) == sign &&
    getIdVal(val2) == sign &&
    getIdVal(val3) == sign
  ) {
    return true;
  }
}

function selectWinner() {
  if (
    checkIdSign(1, 2, 3, playerSign) ||
    checkIdSign(4, 5, 6, playerSign) ||
    checkIdSign(7, 8, 9, playerSign) ||
    checkIdSign(1, 4, 7, playerSign) ||
    checkIdSign(2, 5, 8, playerSign) ||
    checkIdSign(3, 6, 9, playerSign) ||
    checkIdSign(3, 6, 9, playerSign) ||
    checkIdSign(1, 5, 7, playerSign) ||
    checkIdSign(3, 5, 7, playerSign)
  ) {
    runBot = false;
    bot(runBot);
    setTimeout(() => {
      gameResult.classList.add("show");
      secContainer.classList.remove("show");
    }, 700);

    if (playerSignValue == playerSign) {
      winnerNameText.innerHTML = `<span class = "match-inline"><p class="winName">${playerNameInput.value}</p> won the game!`;
    } else {
      winnerNameText.innerHTML = "Computer has won!";
    }
  } else {
    if (
      getIdVal(1) != "" &&
      getIdVal(2) != "" &&
      getIdVal(3) != "" &&
      getIdVal(4) != "" &&
      getIdVal(5) != "" &&
      getIdVal(6) != "" &&
      getIdVal(7) != "" &&
      getIdVal(8) != "" &&
      getIdVal(9) != ""
    ) {
      runBot = false;
      bot(runBot);
      setTimeout(() => {
        gameResult.classList.add("show");
        secContainer.classList.remove("show");
      }, 700);
      winnerNameText.textContent = "It's a tie!";
    }
  }
}

//play again button event listener that triggers an event listener on click, to reload the window
playAgainBtn.onclick = () => {
  window.location.reload();
};
