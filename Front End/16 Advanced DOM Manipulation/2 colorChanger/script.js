// Method 1
// var isPurple = false;
// document.querySelector("button").addEventListener("click", function(){
//     if (isPurple){
//         document.body.style.background = "white";
//     }
//     else{
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });

// Method 2
document.querySelector("button").addEventListener("click", function(){
    document.body.classList.toggle("purple");
});