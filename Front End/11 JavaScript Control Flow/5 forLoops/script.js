console.log("All numbers between -10 and 19");
for (var i = -10; i < 20; i++){
    console.log(i);
}

console.log("All even numbers between 10 and 40");
for (var j = 10; j <= 40; j++){
    if (j%2 === 0){
        console.log(j);
    }
}

console.log("All odd numbers between 300 and 333");
for (var k = 300; k <= 333; k++){
    if (k%2 !== 0){
        console.log(k);
    }
}

console.log("All numbers divisible by 5 AND 3 between 5 and 50");
for (var l = 5; l <= 50; l++){
    if (l%5 === 0 && l%3 === 0){
        console.log(l);
    }
}