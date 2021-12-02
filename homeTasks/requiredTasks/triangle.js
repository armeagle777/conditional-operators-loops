//TODO: Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of
//TODO:  the angles of a triangle equals 180 degrees).

function triangleThirdAngle(angleOne, angleTwo){
    return 180 - angleOne - angleTwo;
}


//? Testing function with inputs (45, 90), (30, 30), (75, 25)

console.log(`in case (45, 90) Third angle is equal : ${triangleThirdAngle(45, 90)}`);
console.log(`in case (30, 30) Third angle is equal : ${triangleThirdAngle(30, 30)}`);
console.log(`in case (75, 25) Third angle is equal : ${triangleThirdAngle(75, 25)}`);