   // This demo shows off comments!



    // Comments do not have to start at the beginning of a line.

   /* Here is how
   to have
   multi-line
   comments. */

   
   /* multi
   line
   comment */

   // this will not print, cool


   let phrase = "Chili Cook-off";

for (let i = 0; i < phrase.length - 1; i = i + 3) {
   console.log(phrase[i]);
}

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

function myFunc(radius) {
   let area = Math.PI * radius**2;
   return area;
}

let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43));