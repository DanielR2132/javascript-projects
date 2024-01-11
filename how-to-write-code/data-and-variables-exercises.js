let spaceshuttle = "determination";
let speed = 17500;

let distancemars = 255000000;

let distancemoon = 384400;

const milesperkilometer = 0.621;

console.log (typeof spaceshuttle)
console.log(typeof speed)
console.log(typeof distancemars)
console.log(typeof distancemoon)
console.log(typeof milesperkilometer)

let milesToMars = distancemars * milesperkilometer;
let hoursToMars = milesToMars / speed

console.log(hoursToMars)
console.log(9048.857142857143 / 24)

let daystomars = hoursToMars / 24 

console.log(spaceshuttle + " will take " + daystomars + " days to reach the moon");

console.log(4 == "4")

let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}
let num = 1;
if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}