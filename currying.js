// function sum(a){
//     return function(b){
//         return function(c){
//             return a + b +c;
//         }
//     }
// }
// console.log(sum(2)(3)(4)); //output - 9


//Convert the following function into a curried version:
// const add = (a) => (b) => (c) => a + b + c;
// console.log(add(2)(3)(4)); // Output: 9


//Create a curried function that multiplies three numbers.
// const multiply = (a) => (b) => (c) => a * b * c;
// console.log(multiply(2)(3)(4)); // Output: 24


//Write a curried function that takes three strings and concatenates them.
// const concat = (str1) => (str2) => (str3) => str1 + str2 + str3;
// console.log(concat("Hello")(" ")("World!")); // Output: "Hello World!"


//Implement a curried function that takes two numbers as a range and checks if the third number falls within that range.
// const inRange = (min) => (max) => (num) => num >= min && num <= max;
// console.log(inRange(10)(20)(15)); // Output: true
// console.log(inRange(10)(20)(25)); // Output: false


//Implement a function that calculates a^b using currying.
// const power = (base) => (exp) => Math.pow(base, exp);
// console.log(power(2)(3)); // Output: 8
// console.log(power(5)(2)); // Output: 25


//Create a function that takes a discount percentage and a price, then returns the discounted price.
// const discount = (percent) => (price) => price - (price * percent) / 100;
// console.log(discount(10)(200)); // Output: 180
// console.log(discount(20)(500)); // Output: 400


//Write a curried function that checks if a number is divisible by another.
// const isDivisible = (divisor) => (num) => num % divisor === 0;
// console.log(isDivisible(5)(25)); // Output: true
// console.log(isDivisible(4)(25)); // Output: false


//Write a curried function that filters an array of numbers based on a given condition.
// const filterNumbers = (condition) => (arr) => arr.filter(condition);
// console.log(filterNumbers((n) => n > 10)([5, 12, 20, 7])); // Output: [12, 20]


//Create a curried function that takes a log level and a message, then prints the formatted log.
// const log = (level) => (message) => `[${level}] ${message}`;
// console.log(log("INFO")("User logged in")); // Output: "[INFO] User logged in"


//Write a function that can add numbers infinitely and return the sum when called without arguments.
// const sum = (a) => (b) => b !== undefined ? sum(a + b) : a;
// console.log(sum(1)(2)(3)()); // Output: 6
// console.log(sum(5)(10)(15)(20)()); // Output: 50

//OR
//Write a function that can add numbers infinitely 
function sum(a) {
    return function (b) {
        if (b === undefined) {  // If b is undefined, return accumulated sum
            return a;
        }
        return sum(a + b); // Continue currying
    };
}
const result = sum(1)(2)(3)(4)(5)(6)(7)(); // Calling with empty parentheses to end recursion
console.log(result); // Output: 28
    

