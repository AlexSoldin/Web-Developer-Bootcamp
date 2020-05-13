var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x+y;
    }
}

var comments = {};
comments.data = ["Good Job", "Bye", "Lame..."];
comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    })
}

function print(arr){
    arr.array.forEach(function(el) {
        console.log(el);
    });
}

print(comments.data);
