//Code (Promise Example)
// function fetchData() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve("Data Loaded"), 2000);
//     });
// }
// fetchData().then(console.log); // Output after 2 sec: "Data Loaded"



// Simulating an asynchronous function using Promise
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Loaded");
//         }, 2000);
//     });
// }   //dono code add karne pe run karega
//Code (async/await Example):
// async function fetchDataAsync() {
//     let data = await fetchData();
//     console.log(data);
// }
// fetchDataAsync();


// How do you create and resolve a Promise?
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved!"), 2000);
// });
// myPromise.then(console.log); // Output after 2 sec: "Promise Resolved!"


//How do you reject a Promise and handle errors?
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error occurred!"), 2000);
// });
// myPromise.catch(console.error); // Output after 2 sec: "Error occurred!"


//How do you use async/await to handle a resolved Promise?
// async function getData() {
//     let promise = Promise.resolve("Hello, Async!");
//     let result = await promise;
//     console.log(result); // Output: "Hello, Async!"
// }
// getData();


//How do you handle errors using try...catch in async/await?
// async function fetchData() {
//     try {
//       let data = await Promise.reject("Something went wrong!");
//       console.log(data);
//     } catch (error) {
//       console.log("Caught error:", error);
//     }
// }
// fetchData(); // Output: "Caught error: Something went wrong!"
  

//How do you run multiple promises in parallel using Promise.all()
// async function getData() {
//     let p1 = Promise.resolve("First");
//     let p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 2000));
  
//     let results = await Promise.all([p1, p2]);
//     console.log(results); // Output after 2 sec: ["First", "Second"]
// }
// getData();
  

//How do you use Promise.race() to get the first settled Promise?
// async function raceExample() {
//     let p1 = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));
//     let p2 = new Promise((resolve) => setTimeout(() => resolve("Slow"), 3000));
  
//     let result = await Promise.race([p1, p2]);
//     console.log(result); // Output after 1 sec: "Fast"
// }
// raceExample();


//How do you use Promise.any() to get the first resolved Promise?
// async function anyExample() {
//     let p1 = new Promise((_, reject) => setTimeout(() => reject("Fail 1"), 1000));
//     let p2 = new Promise((resolve) => setTimeout(() => resolve("Success"), 2000));
  
//     let result = await Promise.any([p1, p2]);
//     console.log(result); // Output after 2 sec: "Success"
// }
// anyExample();


//How do you convert a callback function into a Promise?
// function delay(ms, callback) {
//     setTimeout(() => callback(`Waited ${ms} ms`), ms);
// }
// function promisify(fn) {
//     return (...args) =>
//     new Promise((resolve) => fn(...args, resolve));
// }
// async function test() {
//     let result = await promisify(delay)(2000);
//     console.log(result); // Output after 2 sec: "Waited 2000 ms"
// }
// test();
  
  
//How do you use an async IIFE (Immediately Invoked Function Expression)?
(async function () {
    let response = await Promise.resolve("Async IIFE Executed");
    console.log(response); // Output: "Async IIFE Executed"
})();
     

