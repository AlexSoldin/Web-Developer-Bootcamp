function sing(){
    console.log("Twinkle twinkle...");
    console.log("How I wonder...")
}

// setInterval(anotherFunc, interval)
// () are not required - setInterval will call the function
setInterval(sing, 1000);

// clearInterval(value)
// value is determined by setInterval
clearInterval(2);

// Declaring function inline
setInterval(function(){
    console.log("Anon Function");
    console.log("This is Awesome");
}, 2000);