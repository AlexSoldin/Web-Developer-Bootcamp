// isEven()
// function isEven(num){
//     if (num%2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isEven(num){
    return num%2 === 0;
}

// factorial()
function factorial(num) {
    var result = 1;
    while (num >= 1){
        result *= num;
        num--;
    }
    return result;
}

// kebabToSnake()
function kebabToSnake(str) {
    var result = str.replace(/-/g, "_");
    return result;
}