var btnPlayer1 = document.querySelector("#btn-player1");
var btnPlayer2 = document.querySelector("#btn-player2");
var btnReset = document.querySelector("#btn-reset");

var players = [btnPlayer1, btnPlayer2];

var displayP1 = document.querySelector("#display-p1")
var displayP2 = document.querySelector("#display-p2")
var displayMsg = document.querySelector("#message");
var playerMsg = document.querySelector("#player");
var scoreLimitDisplay = document.querySelector("#score-limit");

var input = document.querySelector("input");
var player1Name = document.querySelector("#player1Name");
var player2Name = document.querySelector("#player2Name");

var playerNames = [player1Name, player2Name];

var player1Score = 0;
var player2Score = 0;
var scoreLimit = 5;

var gameOver = false;

//---------Add Event Listener----------
players.forEach(addEventToButton);
playerNames.forEach(addEventToInput);
btnReset.addEventListener("click", resetPlayerScores);
input.addEventListener("change", updateScoreLimit);

//Click event listener: Adds player score when button is clicked
function addPlayerScore() {

    if(!gameOver) {
        if(this == btnPlayer1) {
            player1Score++;
            updateScoreboard(displayP1, player1Score);
        }
        else if(this == btnPlayer2) {
            player2Score++;
            updateScoreboard(displayP2, player2Score);
        }
    }

}

//Resets score or players to 0
function resetPlayerScores() {
    player1Score = player2Score = 0;

    updateScoreboard(displayP1, player1Score);
    updateScoreboard(displayP2, player2Score);

    displayMsg.classList.add("d-none");

    gameOver = false;
}

//change scoreboard text
function updateScoreboard(display, points) {
    display.textContent = points;

    if(points == scoreLimit)
    {
        gameOver = true;

        displayMsg.classList.remove("d-none");
        
        if(display == displayP1) {
            playerMsg.textContent = btnPlayer1.textContent;
        }
        else if(display == displayP2) {
            playerMsg.textContent = btnPlayer2.textContent;
        }
    }
}

//Update score limit
function updateScoreLimit() {

    //Prevents overriding of scoreLimit to 0 when player tries to input a negative value
    if(input.value > 0) {
        scoreLimit = Number(input.value);
        scoreLimitDisplay.textContent = input.value;
    
        resetPlayerScores();
    }

    //Empties input field when user tries to enter a negative number
    if(input.value < 0) {
        input.value = "";
    }
}

//Updates player name
function updatePlayerName() {

    if(this.value != "") {
        if(this == player1Name) {
            btnPlayer1.textContent = this.value;
            this.value = "";
        }
        else if(this == player2Name) {
            btnPlayer2.textContent = this.value;
            this.value = "";
        }
    }
    else {
        if(this == player1Name) {
            btnPlayer1.textContent = "Player 1";
        }
        else if(this == player2Name) {
            btnPlayer2.textContent = "Player 2";
        }
    }
}

//Adds a click event listener to player buttons
function addEventToButton(button) {
    button.addEventListener("click", addPlayerScore);
}

//Adds a change event listener to input fields
function addEventToInput(input) {
    input.addEventListener("change", updatePlayerName);
}