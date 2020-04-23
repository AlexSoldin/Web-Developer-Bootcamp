// x is only defined in the function
function doMath(){
    var x = 40;
    console.log(x);
}

var y = 99;
function doMoreMath(){
    y = 100; //changed value of previosly declared y
    console.log(y);
}

var phrase = "hi there";
function doSomething(){
    var phrase = "Goodbye";
    console.log(phrase);
}

var num = 8;
function someMath(){
    num += 1;
    if (num%5 == 0){
        return true;
    }
    else {
        return false;
    }
}
num += 1;
someMath(); //true