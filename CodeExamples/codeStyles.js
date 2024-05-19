/*// Clean and easy-to-read code example
const jimmieAge = 99;
const jimmieBio = "Jimmie is a software engineer.";

function greet(name) {
    console.log("Hello, " + name + "!");//indentation in the function block
}

if (jimmieAge >= 18) {
    if (jimmieAge < 65) { //nesting levels
        console.log("Jimmie is an adult.");//indentation in our if statement
    } else {
        console.log("Jimmie is a kenyan citizen."); //we have short line lengths
    }
}

const message = "Hello, Jimmie!";*/


/*//a sample ninja code
const m = Math;

// One-letter variable 
let x = 5, y = 7;

// Powerful function with smart synonyms
const hyp = (a, b) => m.sqrt(a ** 2 + b ** 2);


let z = hyp(x, y);// Reuse of names for brevity

// Abstract words and brevity
const msg = "Ninjas are stealthy and agile.";

console.log(z);
console.log(msg);*/

/*// methods of primitives
const name = "Jimmie";
const age = 30;
const isAdult = true;

console.log(name.charAt(0)); // Output: "J"

console.log(name.toUpperCase()); // Output: "JIMMIE
console.log(name.substring(1, 4)); // Output: "imm"
console.log(isAdult.toString()); // Output: "true"

console.log(age.toFixed(0));*/



/*const num = 4.7;

console.log("Original number:", num);
console.log("Math.round():", Math.round(num)); // Output: 5
console.log("Math.floor():", Math.floor(num)); // Output: 4
console.log("Math.ceil():", Math.ceil(num)); // Output: 5
console.log("Math.trunc():", Math.trunc(num)); // Output: 4
console.log("Number.toFixed(1):", num.toFixed(1)); // Output: "4.7"*/

/*//more number methods
console.log(isFinite(123)); // Output: true
console.log(isNaN(123)); // Output: false
console.log(parseInt('123')); // Output: 123
console.log(parseFloat('123')); // Output: 123

// Math.random
console.log(Math.random()); // Output: a random number between 0 (inclusive) and 1 (exclusive)*/




/*// Template strings 
const name = 'Jimmie';
const greeting = `Hello, ${name}!`;

console.log(greeting); // Output: Hello, Jimmie!
console.log(greeting.length); // Output: 14
const escapedString = 'This is a backslash: \\';
console.log(escapedString); // Output: This is a backslash: \
console.log(greeting[0]); // Output: H
console.log(greeting[7]); // Output: J
name[0] = 'M';
console.log(name); // Output: Jimmie (unchanged)*/


/*//string methods
const str = 'Hello, Jimmie!';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Output: HELLO, JIMMIE!
const index = str.indexOf('Jimmie');
console.log(index); // Output: 7 (index where 'Jimmie' starts)
const includesSubstr = str.includes('Jimmie');
console.log(includesSubstr); // Output: true
const substring = str.slice(7);
console.log(substring); // Output: Jimmie!
const str1 = 'apple';
const str2 = 'banana';
const compareResult = str1.localeCompare(str2);
console.log(compareResult); // Output: -1 (str1 comes before str2 lexicographically)*/


/*//methods in array
const arr = ['jb', 'cliff', 'nelly', 'max'];

// Get last elements with "at"
const lastElementsWithAt = arr.filter(item => item.endsWith('at'));
console.log('Last elements with "at":', lastElementsWithAt);
const removedItem = arr.pop();
console.log('Removed item:', removedItem); 
arr.push('hopp');
console.log('Array after push:', arr); 

const shiftedItem = arr.shift();
console.log('Shifted item:', shiftedItem); // Output: jb
console.log('Array after shift:', arr); 

// array.unshift() - adds new element at the beginning
arr.unshift('kb');
console.log('Array after unshift:', arr);*/

/*// Loops 
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(colors[index]);
}

// Multidimensional arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6

// toString() - returns comma-separated lists
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.toString()); // Output: apple,banana,orange

// Don't compare arrays with ==
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2); // Output: false*/



//array methods

const arr = ['apple', 'banana', 'cherry', 'date'];

// arr.splice() 
arr.splice(2, 1); 
console.log(arr); 
const newArr = arr.concat(['elderberry', 'fig']);
console.log(newArr); 
arr.forEach(item => console.log(item.toUpperCase())); // Output: APPLE, BANANA, DATE
console.log(arr.indexOf('banana')); // Output: 1
console.log(arr.includes('cherry')); // Output: true
console.log(arr.findIndex(item => item === 'date')); // Output: 2
console.log(arr.filter(item => item.length > 5)); // Output: ['banana', 'cherry']

// Transform an array
// arr.map() - calls function for each element and returns result
const mappedArr = arr.map(item => item.toUpperCase());
console.log(mappedArr); // Output: ['APPLE', 'BANANA', 'CHERRY', 'DATE']

// arr.sort() - sorts array in order
arr.sort();
console.log(arr); // Output: ['apple', 'banana', 'cherry', 'date']

// arr.reverse() - reverses order of elements
arr.reverse();
console.log(arr); // Output: ['date', 'cherry', 'banana', 'apple']

// arr.split()/arr.join()
const str = 'apple,banana,cherry,date';
const strArr = str.split(',');
console.log(strArr); // Output: ['apple', 'banana', 'cherry', 'date']
console.log(strArr.join('-')); // Output: apple-banana-cherry-date












