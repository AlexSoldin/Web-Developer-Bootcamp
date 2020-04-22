// Version 1
// var answer = prompt("Are we there yet?");

// while (answer !== "Yes" && answer !== "Yeah"){   
//     var answer = prompt("Are we there yet?");
// }

// alert("Yay, we made it!");

// Version 2
var answer = prompt("Are we there yet?");

while (answer.indexOf("Yes") === -1){   
    var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");
