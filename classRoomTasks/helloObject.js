/* 
TODO 1.Create an empty object user.
TODO 2.Add the property name with the value John.
TODO 3.Add the property surname with the value Smith.
TODO 4.Change the value of the name to Pete.
TODO 5.Remove the property name from the object.
*/

//! Create an empty object user.
let testObject ={}

//! Add the property name with the value John.
testObject.name = 'John';

//! Add the property surname with the value Smith.
testObject.surname = 'Smith';

//! Change the value of the name to Pete.
testObject.name = 'Pete';

//! Remove the property name from the object.
delete testObject.name;


//? Testing if name property exists in testObject
console.log('name' in testObject);