const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
strNew = str.slice(3) + str.slice(0, 3) ;
console.log(strNew)

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} with the first three letters at the end comes out to be ${strNew}`)

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let n = input.question("Please enter the amount of letters you wish to place in the back.")
let newname = str.slice(n) + str.slice(0,n)
console.log(number)
console.log(`${str} with the first ${n} letters at the end comes out to be ${newname}`)

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (n > str.length){
newname = srt.slice(3) + str.slice(0,3);
console.log(`${n} with the first three letters at the end is ${newname}.(Your answer was longer then the word so defaulted to three)`)
} else {
    console.log(`${n} with the first ${number} letters at the end comes out to be ${newname}`)
}