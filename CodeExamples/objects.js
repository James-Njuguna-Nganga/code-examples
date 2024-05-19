//shallow clone example
/*let original = {           
  name: "Jimmie",
  address: {
      city: "Nairobi",
      country: "Kenya"
  }
};

let cloned = Object.assign({}, original);

console.log(cloned === original); // Output: false (cloned object is a separate object)
console.log(cloned.address === original.address); // Output: true (nested address object is shared)

// Modifying a nested property in the cloned object affects the original object
cloned.address.city = "Nakuru";
console.log(original.address.city); // Output: Nakuru

//deep cloning example
/*let original = {
  name: "Jimmie",
  address: {
      city: "Nairobi",
      country: "Kenya"
  }
};

let cloned = structuredClone(original);

console.log(cloned === original); // Output: false (cloned object is a separate object)
console.log(cloned.address === original.address); // Output: false (nested address object is also separate)

// Modifying a nested property in the cloned object doesn't affect the original object
cloned.address.city = "Nakuru";
console.log(original.address.city); // Output: Nairobi
console.log(cloned.address.city);*/ // output Nakuru

/*let obj1 = { name: "James" };
let obj2 = obj1;
obj2.name = "John";
console.log(obj1.name);*/

//object methods,"this"
/*let person = {
  name: "Jimmie",
  age: 90,
  greet: function() {
      console.log("Hello, my name is " + this.name);
  }
};
person.greet(); // Output: Hello, my name is Jimmie*/

// "this" key word in object methods 
/*let person = {
  name: "Jimmie",
  greet: function() {
      console.log("Hello, my name is " + this.name);
  }
};

let anotherPerson = {
  name: "Max"
};

person.greet(); // Output: Hello, my name is Jimmie
anotherPerson.greet = person.greet;
anotherPerson.greet(); // Output: Hello, my name is Max*/


//arrow functions
/*let obj = {
  name: "Alice",
  greet: function() {
      console.log("Hello, my name is " + this.name);
  },
  getArrowGreet: function() {
      return () => {
          console.log("Hello, my name is " + this.name);
      };
  }
};

obj.greet(); // Output: Hello, my name is Alice

let arrowGreet = obj.getArrowGreet();
arrowGreet(); // Output: Hello, my name is Alice*/


//constructor function
/*function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.greet = function() {
      console.log("Hello, my name is " + this.name);
  };
}
  let person = new Person("John", 30);

  console.log(person.name);
  person.greet();*/

  

/*// symbols
const sym1 = Symbol();
const sym2 = Symbol("description"); // Optional description

// Symbols are unique
console.log(sym1 === sym2); // false

// Using symbols as object properties
const obj = {
    [sym1]: "value",
    [sym2]: "another value"
};

// Accessing symbol properties
console.log(obj[sym1]); // "value"
console.log(obj[sym2]); // "another value"

// Symbol properties are not enumerable
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(), Symbol(description)]

// Symbol properties are also not picked up by for...in loop
for (let key in obj) {
    console.log(key); // Will not log symbol properties
}*/



/*//optional chaining '?.'
const person = {
  name: "John",
  address: {
      street: "123 Main St",
      city: "Anytown",
      // No zipCode property
  },
};
console.log(person.address?.city); // "Anytown"
console.log(person.address?.zipCode); // undefined (no error)*/

//optional chaining example
  /*let person = {
    name: "Jimmie",
    address: null //  address is null
};

// Using optional chaining to access a nested property safely
let city = person.address?.city; // No error if address is null or undefined
console.log(city); // Output: undefined*/



