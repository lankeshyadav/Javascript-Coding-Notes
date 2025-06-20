//push()
//Adds one or more elements to the end of an array and returns the new length.
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]


//pop()
//Removes the last element from an array and returns it.
/*const arr = [1, 2, 3];
const last = arr.pop();
console.log(last); // 3
console.log(arr);*/  // [1, 2]


//shift()
//Removes the first element from an array and returns it.
/*const arr = [1, 2, 3];
const first = arr.shift();
console.log(first); // 1
console.log(arr);*/   // [2, 3]


//unshift()
//Adds one or more elements to the beginning of an array and returns the new length.
/*const arr = [2, 3];
arr.unshift(1);
console.log(arr);*/ // [1, 2, 3]


//slice()
//Returns a shallow copy of a portion of an array without modifying the original array.
/*const arr = [1, 2, 3, 4];
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(arr); */   // [1, 2, 3, 4]


//splice()
//Adds, removes, or replaces elements in an array.
/*const arr = [1, 2, 3, 4];
arr.splice(1, 2, 5, 6); // Removes 2 and 3, adds 5 and 6
console.log(arr);*/ // [1, 5, 6, 4]


//map()
//Creates a new array with the results of calling a provided function on every element.
/*const arr = [1, 2, 3];
const squared = arr.map(num => num ** 2);
console.log(squared);*/ // [1, 4, 9]


//filter()
//Creates a new array with all elements that pass the test implemented by the provided function.
/*const arr = [1, 2, 3, 4];
const even = arr.filter(num => num % 2 === 0);
console.log(even);*/ // [2, 4]


//reduce()
//Executes a reducer function on each element of the array, resulting in a single output value.
/*const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);*/ // 10


//forEach()
//Executes a provided function once for each array element.
/*const arr = [1, 2, 3];
arr.forEach(num => console.log(num * 2));*/ // Output: 2, 4, 6



// find() – Returns the first element that satisfies the condition
// let numbers = [1, 2, 3, 4];
// let found = numbers.find(num => num > 2);
// console.log(found); // 3


// includes() – Checks if an array contains a value
// let numbers = [1, 2, 3];
// console.log(numbers.includes(2)); // true
// console.log(numbers.includes(5)); // false


//sort() - The sort() method in JavaScript sorts an array in place and by default, sorts elements as strings.
// let fruits = ["Banana", "Apple", "Orange"];
// fruits.sort();
// console.log(fruits); // ["Apple", "Banana", "Orange"]

//Sorting Numbers (Incorrect Way) - If you use sort() directly on numbers, it sorts them as strings
// let numbers = [10, 2, 5, 1];
// numbers.sort();
// console.log(numbers); // [1, 10, 2, 5] (Incorrect)


//Sorting Numbers (Correct Way) - To sort numbers in ascending order, use a comparison function
// let numbers = [10, 2, 5, 1];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [1, 2, 5, 10]


//Sorting in Descending Order - For descending order, swap a - b to b - a
// let numbers = [10, 2, 5, 1];
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [10, 5, 2, 1]


//Sorting Objects - If you have an array of objects, you can sort based on a property
// let students = [
//     { name: "John", age: 25 },
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 }
//   ];
  
//   students.sort((a, b) => a.age - b.age);
//   console.log(students);
  /*
  output:-
  [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "John", age: 25 }
  ]
  */


  // Array.prototype.myPush = function(number){
  //   this[this.length]=number;
  //   return this.length;
  // }

  // console.log([1,2,3,4,5].myPush(80));  //6
 
  
  // Array.prototype.myPop = function(){
  //   let lastEle = this[this.length-1];
  //   this.length=this.length-1;
  //   return lastEle;
  // }

  // console.log([1,2,3,4,5].myPop());  //5



  var a = 10;
  var b = 20;
  var c = a+b;
  console.log(c);

