// Click
// $("h1").click(function(){
//     alert("h1 clicked");
// });

// $("button").click(function(){
//     // $(this).css("background", "pink");
//     var text = $(this).text();
//     console.log("You clicked: "+ text);
// });

// Key Press
// $("input").keypress(function(event) {
//     console.log(event);
//     if(event.which === 13){
//         alert("You hit enter");
//     }
// });

// On - similar to addEventListener
$("h1").on("click", function(){
    $(this).css("color", "purple")
});

$("input").on("keypress", function(){
    console.log("Keypress");
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
});