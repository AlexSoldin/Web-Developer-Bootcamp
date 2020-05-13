var choice = prompt("What would you like to do?");
var todos = [];

while (choice !== "quit"){

    if (choice === "new"){
        addTodo();
    }

    else if (choice === "delete"){
        deleteTodo();
    }

    else if (choice === "list"){
        listTodos();
    }

    choice = prompt("What would you like to do?");
}

console.log("Quit Successful");

function addTodo(){
    var newTodo = prompt("Enter a new todo?");
    todos.push(newTodo);
    console.log("Addition Successful")
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1); //index, number of items to delete
    console.log("Delete Successful");
}

function listTodos(){
    console.log("**************")
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**************")
}

