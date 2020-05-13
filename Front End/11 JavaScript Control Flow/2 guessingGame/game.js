// Create secretNumber
var number = 4;

// Ask user for a guess
var guess = Number(prompt("Guess a number"));

// Check guess
if (guess === number){
    alert("You got it right!");
}

else if (guess < number){
    alert("Too low, try again!");
}

else{
    alert("Too high, try again!");
}

