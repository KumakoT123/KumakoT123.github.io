var difficulty = 6; //Hard-coded for now
var hasWon = false;
var curBodyCol = "#232323";
var themeCol = "steelblue";

var colors = generateRandomColors(difficulty);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var h2 = document.querySelector("h2");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");

//Select buttons
var btnReset = document.querySelector("#btn-reset");
var modeBtns = document.getElementsByClassName("mode");
var btnEasy = document.querySelector("#btn-easy");
var btnHard = document.querySelector("#btn-hard");


//-----------------------------------------------------
//Add click event listener to reset button
btnReset.addEventListener("click", resetColors);
/*btnEasy.addEventListener("click", setDifficulty);
btnHard.addEventListener("click", setDifficulty);*/

startGame();

function checkSquareColor() {
    //Get color of clicked square
    var clickedColor = this.style.backgroundColor;

    //Check clickedColor with pickedColor
    //If it matches
    if(clickedColor === pickedColor) {
        //Display winning message
        msgDisplay.textContent = "You Win!"
        h2.style.backgroundColor = clickedColor;
        changeColors(clickedColor);
        btnReset.textContent = "Play Again?";
    }
    else {
        //make squares disappear
        this.style.backgroundColor = curBodyCol;
        msgDisplay.textContent = "Try Again";
    }
}

//Changes all square colors when the game is won
function changeColors(color) {
    //Loop through squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//Generate random number to pick a color from array
function pickColor() {
    var random =  Math.floor(Math.random() * colors.length);

    return colors[random];
}

//Generate an array of colors
function generateRandomColors(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    
    return arr;
}

//Generate a random color
function randomColor() {
    //generate random values for each variable
    var rgb = {
        r: Math.floor(Math.random() * 255 + 1),
        g: Math.floor(Math.random() * 255 + 1),
        b: Math.floor(Math.random() * 255 + 1)
    };

    //return a color
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function startGame() {
    for(var i = 0; i < squares.length; i++) {
        //Assign square color and display mode
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
    
        //Add click event listeners to each square
        squares[i].addEventListener("click", checkSquareColor);
    }

    for(var i =0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", setDifficulty)
    }

    //Converts any lowercase letter to uppercase
    colorDisplay.textContent = pickedColor.toUpperCase();

    //Resets background color of h2
    h2.style.backgroundColor = themeCol;

    //Resets text of reset button
    btnReset.textContent = "New Colors";

    msgDisplay.textContent = "";
}

function resetColors() {
    colors = generateRandomColors(difficulty);
    pickedColor = pickColor();
    
    //Reassigns color to squares
    startGame();
}

function setDifficulty() {

    var btnName = this.textContent;

    if(btnName == "Easy") {
        difficulty = 3;
        this.classList.add("selected");
    }
    else if(btnName == "Hard") {
        difficulty = 6;
        this.classList.add("selected");

    }

    //Cycle through diffculty buttons and remove "selected" class
    for(var i = 0; i < modeBtns.length; i++) {
        if(modeBtns[i].textContent != btnName) {
            modeBtns[i].classList.remove("selected");
        }
    }

    resetColors();
}