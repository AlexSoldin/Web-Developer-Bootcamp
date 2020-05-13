var faker = require("faker");

console.log("----------------------------\nWelcome to my Shop\n----------------------------");

for(var i = 0; i < 10; i++){
    var pName = faker.commerce.productName();
    var price = faker.commerce.price();

    console.log(pName + " - $" + price);

}

console.log(faker.fake("{{commerce.productName}}, {{commerce.price}}"));