//Print numbers from 1 to 10
/*for (let i = 1; i <= 10; i++) {
    console.log("hello world");
}*/ //output:- 10 times print hello world


//Print even numbers from 1 to 20
/*for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }*/ // output:- 2,4,6...,20 tak print hoga
  

//Print the elements of an array
/*const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}*/ //output:- fruits name print hoga


//Calculate the sum of numbers from 1 to 100
/*let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);*/ //output:- 5050


//Reverse an array
/*const numbers = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}
console.log(reversed);*/


//Print multiplication table of a number
/*const num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}*/ //output:- 5 x 1 = 5 to 5 x 10 = 50 print hoga


//Find the factorial of a number
/*const number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(factorial);*/ //output:- 120


//Check if a number is prime
/*const numToCheck = 17;
let isPrime = true;

for (let i = 2; i < numToCheck; i++) {
  if (numToCheck % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(`${numToCheck} is prime: ${isPrime}`);*/ //output:- 17 is prime: true


//Print Fibonacci series up to a given number
const limit = 10;
let a = 0, b = 1;

for (let i = 1; i <= limit; i++) {
  console.log(a);
  const next = a + b;
  a = b;
  b = next;
}


//Count occurrences of a letter in a string
// const str = "hello world";
// const charToCount = 'o';
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === charToCount) {
//     count++;
//   }
// }
// console.log(`'${charToCount}' occurs ${count} times.`);  //output:- 'o' occurs 2 times 



