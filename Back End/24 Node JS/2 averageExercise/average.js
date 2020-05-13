function average(arr){
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    var avg = Math.round(total/arr.length);
    return avg;
}

console.log("Subject: Geography");
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log("Average: " + average(scores));

console.log("Subject: Maths");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("Average: " + average(scores2));