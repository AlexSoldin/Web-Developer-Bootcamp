console.log("All numbers between -10 and 19");
var i = -10;
while (i < 20){
    console.log(i);
    i++;
}

console.log("All even numbers between 10 and 40");
var j = 10;
while (j <= 40){
    if (j%2 === 0){
        console.log(j);
    }
    j++;
}

console.log("All odd numbers between 300 and 333");
var k = 300;
while (k <= 333){
    if (k%2 !== 0){
        console.log(k);
    }
    k+=1;
}

console.log("All numbers divisible by 5 AND 3 between 5 and 50");
var l = 5;
while (l <= 50){
    if (l%5 === 0 && l%3 === 0){
        console.log(l);
    }
    l+=1;
}