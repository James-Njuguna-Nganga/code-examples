// Define an object
/*let person = {
  firstName: "James",
  lastName: "njuguna",
  age: 99,
  "loves football":true,
  address: {
      street: "classic",
      city: "Nyeri",
      zipCode: "12345"
  }
};

// Accessing object properties using dot notation
console.log( person.firstName);
console.log( person.age);
console.log( person.address.street);
//console.log( person.loves football);//error


// Accessing object properties using bracket notation
console.log( person["lastName"]);
//console.log(person["email"]);
console.log(person["loves football"]);*/

// in operator-checks  if a property exists in an object
console.log("email" in person);//outputs false

//for in loop- for displaying every property and value in our oject
 /*for( let key in person){
 console.log(key);
 console.log(person[key]);
 }*/



// Without property value shorthand
/*let name = "Jimmie";
let age = 25;

let person = {
    name: name,
    age: age
};
console.log(person); // Output: { name: 'Jimmie’, age: 25 }

// With property value shorthand
let name = "Jimmie";
let age = 25;

let person = {
    name,
    age
};
console.log(person); // Output: { name: 'Jimmie’, age: 25 }*/


// Converting String object to primitive string
/*let stringObj = new String("Hello");
let strValue = stringObj.valueOf();
console.log("String object to primitive string:", strValue);*/

function callUser(name) {
    return `Hello, ${name}!`; //indenting in a function block
  }
  
  const userName = 'Jimmie'; //line length short as possible
  console.log(callUser(userName));
  



