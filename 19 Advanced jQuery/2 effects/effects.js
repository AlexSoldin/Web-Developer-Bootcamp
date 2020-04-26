// fadeOut()
// $("button").on("click", function(){
// 	$("div").fadeOut(1000, function(){
// 		$(this).remove();
// 	});
// });

// fadeIn()
// fadeToggle()

// slideUp()
// slideDown()

$("button").on("click", function(){
	$('div').slideToggle(1000, function(){
		$(this).remove(); //removes element from the HTML
	});
});