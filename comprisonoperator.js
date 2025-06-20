// var a = 5;
// var b = 10;
// console.log(a == b); //false because not equal value


// let a = 10;
// let b = 20;
// console.log(a === b); //false because not equal value and data type



// let a = 10;
// let b = 10;
// console.log(a === b); //true because equal value

// let a = 10;
// let b = 20;
// console.log(a != b); //true because not equal value

// let a = 5;
// let b = 10;
// console.log(a !== b); //true

// let a = 10;
// let b = 10;
// console.log(a !== b); //true


// let a = "10";
// let b = "20";
// console.log(a !== b); //true because data type is same

// let a = "10";
// let b = "20";
// console.log(a != b); //true

// var a = 30;
// var b = 20;
// console.log(a > b); //true because a is greater value b

// var a = 10;
// var b = 20;
// console.log(a > b); //true because a is not greater value b

// var a = 21;
// var b = 20;
// console.log(a >= b); //true because a is greater value b

// var a = 20;
// var b = 20;
// console.log(a >= b); //true because a is same value b

// var a = 19;
// var b = 20;
// console.log(a >= b); //true because a is not greater value b

// var a = 10;
// var b = 15;
// console.log(a < b); //true because a is less value then b

// var a = 10;
// var b = 11;
// console.log(a <= b); //true because a is less value then b


// How Hoisting Works?
console.log(number)
var number = 5
// Above line JS engines takes as 
var numbers = undefined
console.log(number) // Till this point number is by default(Due to hoisting) has undefined value.
number = 5