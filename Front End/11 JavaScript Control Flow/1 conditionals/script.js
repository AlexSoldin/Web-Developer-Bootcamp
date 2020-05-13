var age = Number(prompt("What is your age?"));

if (age < 0){
    console.log("error!")
}

if (age === 21){
    console.log("happy 21st birthday!")
}

if (age%2 !== 0){
    console.log("your age is odd!")
}

if(age % Math.sqrt(age) === 0){
    console.log("Your age is a perfect square!");
}