console.log('Hello, JavaScript.');
console.log(2001);
console.log("What","do","commas","do?");
console.log("Does", "adding",      "space", "matter?");
console.log('Launch' + 'Code');
console.log("LaunchCode was founded in", 2013);

let cityName = "Vienna";

let stateName = "Virginia";

let location = cityName + ", " + stateName

console.log(location.length)

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);
language = 'JavaScript'
console.log(language.slice(1,6))
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

const classes = ["science, computer, art"];

const teachers = ["Jones", "Willoughby", "Rhodes"];

console.log(classes.length)

console.log(teachers.length)

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);