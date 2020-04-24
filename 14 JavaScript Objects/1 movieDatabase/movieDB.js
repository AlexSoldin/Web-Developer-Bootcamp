movies = [
    {
        name: "Frozen",
        rating: 3.5,
        hasWatched: false
    },
    {
        name: "Sonic The Hedgehog", 
        rating: 5, 
        hasWatched: true
    },
    {
        name: "Spiderman: Far From Home",
        rating: 4.5,
        hasWatched: true
    }
]

for (var i = 0; i < movies.length; i++){
    if (movies[i].hasWatched === true){
        console.log("You have watched \"" + movies[i].name + "\" - " + movies[i]["rating"] + " stars");
    }
    else {
        console.log("You have not seen \"" + movies[i].name + "\" - " + movies[i]["rating"] + " stars");
    }
}