/*
TODO: 1.Create an array styles with items “Jazz” and “Blues”.
TODO: 2.Append “Rock-n-Roll” to the end.
TODO: 3.Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
TODO: 4.Strip off the first value of the array and show it.
TODO: 5.Prepend Rap and Reggae to the array.
*/

//! Creating array 
const music = ['Jazz', 'Blues'];

//! Appending Rock-n-Roll to the end
music.push('Rock-n-Roll');

//! Replacing the middle member into Classics
const arrayLength = music.length;
if(arrayLength % 2 !== 0){
    const middleIndex = (arrayLength - 1) / 2;
    music[middleIndex] = 'Classics';
}

//! Stripping the first value  
const firstValue = music.shift();
console.log(`The first value vas \"${firstValue}\"`);

//! Prepending Rap and Reggae to the array
music.unshift('Rap', 'Reggae');


//? showing the array
console.log(music);

