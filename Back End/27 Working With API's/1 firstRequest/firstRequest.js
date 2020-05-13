const request = require('request')

request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
    //Status code 200 -> Okay
    if(!error && response.statusCode == 200){ 
        const parsedData = JSON.parse(body);
        console.log(parsedData.name + " lives in " + parsedData.address.city);
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
    }
    else{
        console.log(error);
    }
});