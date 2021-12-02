//TODO: What is the result? Why?

let arr = ['a', 'b'];

arr.push(function(){
    console.log(this);
})

//? Testing function 
arr[2](); //*@ The output will be Array 