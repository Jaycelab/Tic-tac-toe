//init var

const mainContainer = document.querySelector(".main-container"), //selecting the main container
  charSelectX = mainContainer.querySelector(".char-options .pl-x"), //selecting the x character
  charSelectO = mainContainer.querySelector(".char-options .pl-o"), //selecting the o character
  secContainer = document.querySelector(".sec-container"), //selecting the section container
  playerTurn = document.querySelector(".player-turn"), //selecting the player turn
  secSpan = document.querySelectorAll(".section span"), //selecting the span of all section spans
  gameResult = document.querySelector(".game-result"), //selecting the game result
  winnerNameText = gameResult.querySelector(".winner-name"), //selecting the winner calling gameResult and selecting the winner name along with the button
  playAgainBtn = gameResult.querySelector("button"),
  welcomeSection = document.querySelector(".welcome"), //selecting the welcome section
  playerName = document.getElementById("playerName"), //selecting the player name
  secContent = document.querySelector(".sec-content"), //selecting the section content
  playerNameInput = document.getElementById("playerNameInput"); //selecting the player name input

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
const playBtn = document.getElementById("playBtn"); //selecting the player button
playBtn.addEventListener("click", () => {
  welcomeSection.style.display = "none";
  mainContainer.style.display = "flex";
  secContainer.style.display = "block";
  secContent.style.display = "block";
});

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
function clickedBox(element) {
  if (playerTurn.classList.contains("Player")) {
    playerSign = "O"; //if the player turn contains the player class, set the player sign to O
    playerSignValue = "O"; //if the player turn contains the player class, set the player sign value to O
    element.innerHTML = `<i class = "${playerOIcon}"></i>`; //set the innerHTML of the element to the player O icon
    playerTurn.classList.remove("active"); //remove the active class from the player turn element
    element.setAttribute("id", playerSign); //set the id of the element to the player sign
  } else {
    element.innerHTML = `<i class = "${playerXIcon}"></i>`; //if the player turn does not contain the player class, set the innerHTML of the element to the player X icon and id to the player sign using setAttribute
    element.setAttribute("id", playerSign);
    playerTurn.classList.add("active"); //add the active class to the player turn element
  }

  //overall after each move, select winner function if there is a winner
  selectWinner(); //calling the selectWinner function

  element.style.pointerEvents = "none"; //disables click events for the click box
  setContainer.style.pointerEvents = "none"; //siables click event for entire game point

  //***timeout function to delay the bot move***
  //temp disable click events on section  container to prevent multiple clicks
  let randomTimeDelay = (Math.random() * 1000 + 200).toFixed(); //setting the random time delay to a random number between 200 and 1000
  setTimeout(() => {
    bot(runBot); //calling the bot function
  }, randomTimeDelay); //setting the random time delay
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
      secSpan[randomBox].innerHTML = `<i class = "${playerXIcon}"></i>`;
      secSpan[randomBox].setAttribute("id", playerSign);
      playerTurn.classList.add("active");
    } else {
      secSpan[randomBox].innerHTML = `<i class = "${playerOIcon}"></i>`;
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
function getIdVal() {
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
    checkIdSign(1, 5, 9, playerSign) ||
    checkIdSign(3, 5, 7, playerSign) ||
    checkIdSign(3, 6, 9, playerSign)
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
