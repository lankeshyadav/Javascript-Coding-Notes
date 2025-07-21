//Object.keys(obj)
//Returns an array of the property names (keys) of an object.
/*const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); */  // ["a", "b", "c"]

//Object.values(obj)
//Returns an array of the property values of an object.
/*const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));*/ // [1, 2, 3]

//Object.entries(obj)
//Returns an array of key-value pairs for an object.
/*const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj));*/ // [["a", 1], ["b", 2], ["c", 3]]

//Object.assign(target, ...sources)
//Copies the values of all enumerable own properties from one or more source objects to a target object.
/*const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target);*/ // { a: 1, b: 2, c: 3 }

//Object.freeze(obj)
//Freezes an object, preventing new properties from being added and existing properties from being modified or deleted.
// const obj = { a: 1 };
// Object.freeze(obj);
// obj.a = 2; // Fails silently or throws an error in strict mode
// console.log(obj); // { a: 1 }

//Object.seal(obj)
//Seals an object, preventing new properties from being added but allowing modifications to existing properties.
//const obj = { a: 1 };
// Object.seal(obj);
// delete obj.a; // Fails silently or throws an error in strict mode
// obj.a = 2; // Works
// console.log(obj); // { a: 2 }

//Object.create(proto, propertiesObject)
//Creates a new object with the specified prototype object and optional properties.
// const proto = { greet: () => "Hello" };
// const obj = Object.create(proto);
// console.log(obj.greet()); // "Hello"

//Object.is(value1, value2)
//Determines if two values are the same (more precise than ===).
// console.log(Object.is(0, -0)); // false
// console.log(Object.is(NaN, NaN)); // true

//Object.getPrototypeOf(obj)
//Returns the prototype of the specified object.
/*const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);*/ // true

//Object.hasOwn(obj, prop)
//Returns true if the object has the specified property as its own (not inherited).
// const obj = { a: 1 };
// console.log(Object.hasOwn(obj, 'a')); // true
// console.log(Object.hasOwn(obj, 'b')); // false
