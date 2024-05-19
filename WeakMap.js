const myWeakMap = new WeakMap;
const keyObj = {};

// Set values
myWeakMap.set(keyObj, 'value1');
myWeakMap.set({}, 'value2'); // Using anonymous object as key

// Getting values
console.log(myWeakMap.get(keyObj)); // Output: val
console.log(myWeakMap.has(keyObj)); 
myWeakMap.delete(keyObj);
console.log(myWeakMap.has(keyObj)); // Output: false
