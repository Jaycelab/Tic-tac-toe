//init var
const mainContainer = document.querySelector('.main-container'),
	charSelectX = mainContainer.querySelector('.char-options .pl-x'),
	charSelectO = mainContainer.querySelector('.char-options .pl-o'),
	secContainer = docoument.querySelector('.sec-container'),
	playerTurn = document.querySelector('.player-turn'),
	secSpan = document.querySelector('.section span'),
	gameResult = document.querySelector('.game-result'),
	winnerNameText = gameResult.querySelector('.winner-name'),
	playAgainBtn = gameResult.querySelector('button'),
	welcomeSection = document.querySelector('.welcome'),
	playerName = document.getElementById('playerName'),
	secContent = document.querySelector('.sec-content'),
	playerNameInput = docoument.getElementById('playerNameInput')

//codeblock to execute after windows finishes loading
window.onload = () => {
	for (let i = 0; i< secSpan.length; i++) {
		secSpan[i].setAttribute('onclick', 'clickedBox(this)');
	}
}	