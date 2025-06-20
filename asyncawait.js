//How do you declare an async function?
// async function fetchData() {
//     return "Hello, Async!";
// }
// fetchData().then(console.log); // Output: "Hello, Async!"


//How do you use await inside an async function?
// async function getData() {
//     let promise = new Promise((resolve) => setTimeout(() => resolve("Data Loaded"), 2000));
//     let result = await promise;
//     console.log(result); // Output after 2 sec: "Data Loaded"
// }
// getData();


//How do you handle errors in async/await?
// async function fetchData() {
//     try {
//       let response = await Promise.reject("Network Error");
//       console.log(response);
//     } catch (error) {
//       console.log("Caught error:", error);
//     }
// }
// fetchData(); // Output: "Caught error: Network Error"
  
  
//How do you use async/await with fetch?
// async function fetchUser() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let user = await response.json();
//     console.log(user);
// }
// fetchUser();


//How do you handle multiple async operations sequentially?
// async function sequentialCalls() {
//     let result1 = await Promise.resolve("First Task Done"); //First Task Done
//     console.log(result1);
  
//     let result2 = await Promise.resolve("Second Task Done"); //Second Task Done
//     console.log(result2);
// }
// sequentialCalls();


//How do you run multiple async operations in parallel?
// async function parallelCalls() {
//     let p1 = Promise.resolve("Task 1");
//     let p2 = Promise.resolve("Task 2");
  
//     let [res1, res2] = await Promise.all([p1, p2]);
//     console.log(res1, res2);
// }
// parallelCalls(); // Output: "Task 1 Task 2"
  
 
//How do you use Promise.race() with async/await?
// async function raceExample() {
//     let p1 = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));
//     let p2 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));
  
//     let result = await Promise.race([p1, p2]);
//     console.log(result); // Output after 1 sec: "Fast"
// }
// raceExample();


//How do you use Promise.any() with async/await?
// async function anyExample() {
//     let p1 = new Promise((_, reject) => setTimeout(() => reject("Fail 1"), 1000));
//     let p2 = new Promise((resolve) => setTimeout(() => resolve("Success"), 2000));
  
//     let result = await Promise.any([p1, p2]);
//     console.log(result); // Output after 2 sec: "Success"
// }
// anyExample();


//How do you convert a callback function into an async function?
// function delay(ms, callback) {
//     setTimeout(() => callback(`Waited ${ms} ms`), ms);
//   }
//   function promisify(fn) {
//     return (...args) =>
//       new Promise((resolve) => fn(...args, resolve));
//     }
//   async function test() {
//     let result = await promisify(delay)(2000);
//     console.log(result); // Output after 2 sec: "Waited 2000 ms"
//   }
//   test();
  
   
// How do you create an async IIFE (Immediately Invoked Function Expression)?
(async function () {
    let response = await Promise.resolve("Async IIFE");
    console.log(response); // Output: "Async IIFE"
})();
  
  

