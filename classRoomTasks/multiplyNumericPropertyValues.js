//TODO: Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for(let property in obj){
        if( typeof obj[property] === 'number'){
            obj[property] *= 2;
        }
    }
}

//? Testing function with given menu object:
multiplyNumeric(menu);
console.log(`menu.width: ${menu.width}`);
