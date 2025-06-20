//How do you handle a resolved Promise?
// const promise = Promise.resolve("Resolved value!");
// promise.then((value) => console.log(value));


//How do you handle a rejected Promise?
// const promise = Promise.reject("Error occurred!");
// promise.catch((error) => console.log(error));


//How do you chain multiple .then() methods?
// const promise = new Promise((resolve) => resolve(2));
// promise
//   .then((num) => num * 2)
//   .then((num) => num + 5)
//   .then((num) => console.log(num)); // Output: 9


//How do you create a simple Promise?
// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//       resolve("Promise resolved!");
//     } else {
//       reject("Promise rejected!");
//     }
//   });
//   myPromise.then(console.log).catch(console.error); //The Promise constructor takes a function with resolve and reject as parameters.
                                                       //If successful, it calls resolve(), otherwise, it calls reject().
  

//How do you use .finally() in a Promise?
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Something went wrong!"), 1000);
//   });
  
//   promise
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => console.log("Cleanup done!"));


//How do you execute multiple Promises in parallel using Promise.all?
// const p1 = Promise.resolve(10);
// const p2 = new Promise((resolve) => setTimeout(() => resolve(20), 2000));
// const p3 = Promise.resolve(30);
// Promise.all([p1, p2, p3]).then(console.log); // Output: [10, 20, 30] after 2 sec
                                                     

// How do you execute multiple Promises but continue even if some fail using Promise.allSettled
// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve("Another Success");
// Promise.allSettled([p1, p2, p3]).then(console.log); //It returns an array with { status, value/reason }.


//How do you execute multiple Promises but return the first settled one using Promise.race?
// const p1 = new Promise((resolve) => setTimeout(() => resolve("First"), 2000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Second"), 1000));
// Promise.race([p1, p2]).then(console.log); // Output: "Second" after 1 sec


//How do you execute multiple Promises and return the first resolved one using Promise.any
// const p1 = new Promise((_, reject) => setTimeout(() => reject("Failed"), 1000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("Success"), 2000));
// Promise.any([p1, p2]).then(console.log).catch(console.error); //Promise.any() returns the first successfully resolved promise.If all reject, it returns an AggregateError.


// How do you convert a callback function into a Promise? (Using promisify)
// function delay(ms, callback) {
//     setTimeout(() => callback(`Waited ${ms} ms`), ms);
//   }
//   function promisify(fn) {
//     return (...args) =>
//       new Promise((resolve) => fn(...args, resolve));
//   }
//   const delayPromise = promisify(delay);
//   delayPromise(2000).then(console.log); // Output after 2 sec
  



// let complate = true;
// let prom = new Promise(function(resolve,reject){
//     if(complate){
//         resolve("i am a student"); //i am a student
//     } else{
//         reject("i am a worker");
//     }
// });
// console.log(prom);


// function prom(complate){
//     return new Promise(function(resolve,reject){
//         console.log("featching data, please wait");
//         setTimeout(() =>{
//             if(complate){
//                 resolve("i am a student"); //i am a studen
//             } else{
//                 reject("i am a worker"); //i am a worker
//             }
//         }, 3000)  //time-3s
//     });
// }
// let OnFulfilment = (result) => {
//     console.log(result);
// }
// let OnRejection = (error) => {
//     console.log(error);
// }
// prom(true).then(OnFulfilment).catch(OnRejection);



// function prom(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("featching data, please wait");
//         var c = a/b;
//         setTimeout(() =>{
//             if(a,b){
//                 resolve(`your answer: ${c}`); //your answer:2.5
//             } else{
//                 reject("failed to calculate"); //failed to calculate
//             }
//         }, 3000)  //time-3s
//     });
// }
// prom(5,2).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


// function prom(){
//     return new Promise(function(resolve,reject){
//         console.log("featching data, please wait");
//         setTimeout(() =>{
//             $.get("https://jsonplaceholder.typicode.com/posts", function(data) {
//                 console.log(data);
//             })
//         }, 2000)  //time-2s
//     });
// }
// prom().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })



const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 2000);
    setTimeout(() => {
        reject("rejected")
    }, 3000);
});





