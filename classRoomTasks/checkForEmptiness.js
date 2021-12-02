//TODO: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {};

function isEmpty(obj){
    let keysCount = 0;
    for(let key in obj){
        keysCount++;
    }
    return keysCount > 0 ? false : true; 
}

//? Testing if object is empty
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false