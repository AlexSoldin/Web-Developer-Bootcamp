// Text
console.log($("h1").text());
console.log($("ul").text());
console.log($("li").text());

$("h1").text("New Text");
$("li").text("Rusty, Colt's dog is adorable");

// HTML
console.log($("ul").html());
$("ul").html("<li>Hacked your UL!</li><li>Rusty is still adorable!</li>");
// $("li").html("<a href='google.com'>Google</a>");

// Attribures
$("img").css("width", "200px");
$("img:first-of-type").attr("src", "https://www.telegraph.co.uk/content/dam/science/2016/05/20/pine_marten_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1400");
$("img").last().attr("src", "https://www.telegraph.co.uk/content/dam/science/2016/05/20/pine_marten_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1400");
console.log($("img").attr("src"));
// $("input").attr("type", "color");
// $("input").attr("type", "checkbox");

// Value - extract a value from an input
console.log($("input").val());
$("input").val("Rusty Steele");
console.log($("select").val());

// Add Class, Remove Class, Toggle Class
$("h1").addClass("correct");
// $("h1").removeClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").addClass("correct");
$("li").toggleClass("correct");
$("li").first().toggleClass("done");
