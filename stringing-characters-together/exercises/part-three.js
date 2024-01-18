//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace('a', ' ').replace('v', ' ').replace('a', ' ').replace('c', ' ').replace('r', ' ').replace('i', ' ').replace('p', ' ').replace('t', ' ').replace('   ', '') ) 
let initials = language.replace('a', ' ').replace('v', ' ').replace('a', ' ').replace('c', ' ').replace('r', ' ').replace('i', ' ').replace('p', ' ').replace('t', ' ').replace('   ', '')

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for '${language}' is '${initials}'.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.trim().replace('J', 'j').replace('S', 's').toUpperCase())

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(notTitleCase[notTitleCase.indexOf('t')].toUpperCase() + notTitleCase.slice(1,5), notTitleCase[notTitleCase.indexOf('c')].toUpperCase() + notTitleCase.slice(7,10));
