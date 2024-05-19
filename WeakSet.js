const myWeakSet = new WeakSet();
const obj1 = {};
const obj2 = {};
myWeakSet.add(obj1);
myWeakSet.add(obj2);
console.log(myWeakSet.has(obj1)); // Output: true
console.log(myWeakSet.has(obj2)); // Output: true

// Removing objects from the WeakSet
myWeakSet.delete(obj1);

// Checking again if objects exist in the WeakSet
console.log(myWeakSet.has(obj1)); // Output: false
console.log(myWeakSet.has(obj2)); // Output: true
