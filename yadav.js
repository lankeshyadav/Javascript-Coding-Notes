// const obj = {a:1, b:2, c:3};
// console.log(Object.values(obj));

// function sum(math,chy,phy,eng,hin){
//     var s = math+chy+phy+eng+hin;
//     return s;
// }
// function percentage(tt){
//     var per = tt/500*100;
//     console.log(per);
// }
// var total = sum(80,90,85,95,60);
// percentage(total);





/*function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]


for (let i = 1; i <= 10; i++) {
  console.log("hello world");
}*/
/*function sum(math,chy,phy,eng,hin) {
  var sum = math+chy+phy+eng+phy;
  return sum;
}
function percentage(tt) {
  var per = tt/500*100;
  console.log(per);
}
var total = sum(82,89,90,91,86);
percentage(total);*/

/*for (let i=4; i<=40; i+=4) {
  console.log(i);
}*/

/*const fruits = ['apple','banana','cherry'];
for(let i = 0; i <=fruits.length; i++) {
  console.log(fruits[i]);
}*/

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// } 
// console.log(sum);

// let arr= ["dog", "cat", "elephant", "antelope"]

// function findLongestStr(arr){
//    return arr.reduce((acc, data) => {
//     if (data.length>acc.length) {
//       return data;
//     }
//     else{
//      return acc;
//     }
//   }, "")
// }

// console.log(findLongestStr(arr));// "elephant"


// const add = (a)=> (b)=> (c)=> a+b+c;
// console.log(add(2)(8)(8));

// const add = (a)=> (b)=> (c) => a*b*c;
// console.log(add(8)(2)(1));

// const sum = (a)=> (b) => (c) => a*b+c;
// console.log(sum(8)(2)(4));

// const divide = (a) => (b) => a/b;
// console.log(divide(8)(2));

// const concat = (str1) => (str2) => (str3) => str1+str2+str3;
// console.log(concat("Lankesh")(" ")("kumar"));


// const add = (base) => (exp) => Math.pow(base,exp);
// console.log(add(6)(2));
// console.log(add(8)(2));


// const sum = (a) => (b) => b !== undefined? sum(a+b):a;
// console.log(sum(1)(2)(3)());
// console.log(sum(5)(15)(20)());  

// function sum(a) {
//   return function(b){
//     if(b === undefined){
//       return a;
//     }
//     return sum(a+b);
//   }
// }
// const result = sum(1)(2)(3)(4)(5)(6)();
// console.log(result);
  

// function fetchData() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve("Data Loaded"), 2000);
//     });
// }
// fetchData().then(console.log); // Output after 2 sec: "Data Loaded"



// function porm (complate){
//   return new Promise(function(resolve,reject){
//     console.log("something data, please wait");
//     setTimeout(() => {
//       if(complate){
//         resolve("i am a student");
//       }else{
//         reject("i am a worker");
//       }
//     },3000);
//   });
// }
// let OnFulfilment = (result) => {
//   console.log(result);
// }
// let OnRejection = (error) => {
//   console.log(error);
// }
// porm(false).then(OnFulfilment).catch(OnRejection);


// async function name() {
//   let promise = Promise.resolve("please wait");
//   let result= await promise;
//   console.log(result);
// }
// name();



// function fetchData() {
//    return new Promise((resolve) => {
//       setTimeout(() => resolve("Data Loaded"), 2000);
//     });
// }
// fetchData().then(console.log); // Output after 2 sec: "Data Loaded"


// async function fetchData() {
//     try {
//       let response = await Promise.reject("Network Error");
//       console.log(response);
//     } catch (error) {
//       console.log("Caught error:", error);
//     }
// }
// fetchData(); // Output: "Caught error: Network Error"


// const str = "   hello world  ";
// console.log(str.trim());

// for(let i = 0; i <= 9; i++){
//     let star = "";
//     for(let j = 0; j <= i; j++){
        
//         let starposition = 9-i;
//         star += starposition >= j ? '*' : ' '; 
//     }
//     console.log(star); 
// }


// var isValidSudoku = function(board) {
//     let rows = Array.from({ length: 9 }, () => new Set());
//     let cols = Array.from({ length: 9 }, () => new Set());
//     let boxes = Array.from({ length: 9 }, () => new Set());

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (board[i][j] === '.') {
//                 continue;
//             }

//             let value = board[i][j];
//             let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//             if (rows[i].has(value) || cols[j].has(value) || boxes[boxIndex].has(value)) {
//                 return false;
//             }

//             rows[i].add(value);
//             cols[j].add(value);
//             boxes[boxIndex].add(value);
//         }
//     }

//     return true;  
// };


// function sortArray(arr) {
//   let sortedArr = [...arr];
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (sortedArr[j] > sortedArr[j + 1]) {
//         let largestnumber = sortedArr[j];
//         sortedArr[j] = sortedArr[j + 1];
//         sortedArr[j + 1] = largestnumber;
//       }
//     }
//   }
//   return sortedArr;
// }
// const numbers = [4,5,1,2,3];
// const result = sortArray(numbers);
// console.log(result); 



// function timesnumber(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let count = arr[i];
//     if (count > 0) {
//       if (obj[count]) {
//         obj[count]++;
//       } else {
//         obj[count] = 1;
//       }
//     }
//   }
//   return obj;
// }
// const arr = [1, 2, 3, 1, 3, 3, 2,1];
// console.log(timesnumber(arr));


function studentsMarks(arr){
 const result =arr.filter((el)=>{
  let find =el.marks.every((mark)=>{
     if(mark>=40) return true;
     let ans =el.marks.reduce((total,el)=>{
      return (total+el/el.length >= 60);
     },0)
      return ans;
  })
  return find;
 })
let final = result.map((el)=>{
  return el.name;
})
 return final;
}
let arr =[
  { name: "Raj", marks: [65, 70, 55] },
  { name: "Simran", marks: [80, 35, 78] },
  { name: "Aman", marks: [90, 95, 85] }
]
console.log(studentsMarks(arr))

