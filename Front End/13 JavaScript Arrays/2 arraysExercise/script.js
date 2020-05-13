function printReverse(arr){
    for (var i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
}

printReverse([1,2,3,4,5]);

function isUniform(arr){
    var uniform = false;
    var init = arr[0];

    for (var i = 1; i < arr.length; i++){
        if (arr[i] !== init){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var total = 0;
    arr.forEach(function(value){
        total += value;
    });
    return total;
}

function max(arr){
    var max = -100;
    arr.forEach(function(value){
        if (value > max){
            max = value;
        }
    });
    return max;
}