var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    
            reset();
        })
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        // Add click listeners
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
    
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
})

// Loop through all squares and change each color to match the given color
function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}

// Pick a random color from the colors array
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Create an array and add num random colors to the array
function generateRandomColors(num){
    var arr = [];
    for (var i=0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

// Select a random color
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    return "rgb"+"("+r+", "+g+", "+b+")";
}