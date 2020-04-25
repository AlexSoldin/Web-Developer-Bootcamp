var p = document.getElementsByTagName("p")[0];
p.textContent;
p.innerHTML; //keeps the html tags used in p[0]

var ul = document.querySelector("ul");
ul.textContent; //gets all text content without li tags
ul.innerHTML; //li tags are included

document.querySelector("h1").textContent = "End of the Lesson";

var img1 = document.getElementsByTagName("img")[0];
img1.getAttribute("src");
img1.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAQqQgHHH3DujGFgXnfbjiLDP2-2-Q91MS2b91G9jBLxGivJB7&usqp=CAU");

var a = document.querySelector("a");
a.setAttribute("href", "http://corgis.com");
a.textContent = "Link to corgis.com";