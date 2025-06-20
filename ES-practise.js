/*
new ES features:JS advance topics
let const

default parameter for function
Arrow function
rest parameter
spread operator

for ..of
for ..in
string literals
Destructuring
modules
class and its ecosystem

symbol
generators and iterators

promise and async await

Map and Set, weakMap, weakSet

iterable objects
*/

//let const
// blocked scope
// we can access global variable using var keyword-- this is not recommended
// We can redeclare using var but we cant redeclare using let or const
// temporary dead zone


// a = 10;
// var a;
// var a=10;
// console.log(a);
// console.log(globalThis.a);



//default parameter for function

// function sum(a,b=50){
//     return a+b;
// }
// console.log(sum(4,5));


// arrow function

let sum = (a, b) => a + b;
var name = "Bittu"
var obj = {
    name: "Lankesh",
    getName: function (){
        return () => {
            console.log(this);
            return this.name;
        }
    }
}

console.log(obj.getName()());
