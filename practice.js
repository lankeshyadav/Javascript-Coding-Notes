
// for(let i = 5; i >= 1; i--){
//     let star = "";
//     for(let j = 1; j <= i; j++){
//         star += '*';
//     }
//     console.log(star); 
// }


//     *
//    **
//   ***
//  ****
// *****

// for(let i = 0; i <= 5; i++){
//     let star = "";
//     for(let j = 0; j <= 4; j++){
        
//         let starposition = 5-i;
//         star += starposition <= j ? '*' : ' '; 
//     }
//     console.log(star); 
// }



// for(let i = 5 ; i >= 1; i--){
//     let star = "";
//     for(let j = 1; j <= 5-i; j++){
//         star += " ";
//     }
//     for(let k = 1; k <=2*i-1; k++){
//             star += "*";  
//         }
//     console.log(star); 
// }



// for(let i = 1; i <= 5; i++){
//     let count = "";
    
//     for(let j = 1; j <= i; j++){
//         count += j;
//     }
    
//     console.log(count);
// }


// for(let i = 1; i <= 5; i++){
//     let str = "";
//     for(let j = 1; j <= 5-i; j++){
//       str += " ";
//     }
//     let res = 1;
//     for(let k = 1; k <= i; k++){
//         str += `${res} `;
//         res = res * (i-k);
//         res = res/k;
//     }
//     console.log(str);
// }




// function isPrime(num) {
//   let len = num/2; 
//   for (let i = 2; i <= len; i++) {
//     if (num % i == 0 || num <= 1) {
//       return false;
//     } 
//   }
//   return true; 
// }
// if (isPrime(number)) {
//   console.log(number + " is a Prime Number");
// } else {
//   console.log(number + " is Not a Prime Number");
// }

// function isPrimenumbers(arr){
//   for(let i = 0; i < arr.length; i++){
//     let flag = isPrime(arr[i]);
//     console.log(`${arr[i]} ${flag}`);
        
//     }
// }
// let arr =[3,4,5,6];
// isPrimenumbers(arr);

// function isPrime(num){
//   let len = num/2;
//   for(let i = 2; i * i <= num; i++){
//     if(num % i == 0 || num < 1){
//          return false;
//     }
//   }
//   return true;
// }


// function largestnumber(arr){
//   let largest =0;
//   for(let i = 0; i<arr.length; i++){
//     if(arr[i] > largest){
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// let arr = [1,2,3,4,7,0,334,48,1];
// console.log(largestnumber(arr));

// Question 2: You are given a sorted array of size n in increasing order & a target value.
//             Write a function to find target in that array and return its index.
//             It is guranteed that target will always exists in arr.
// Time Limit: 1 sec
// 1 <= n <= 10^9

// Test Case 1: arr: [2,3,7,15,46]   target: 15
// Output:      3



// function indexnumber(arr,target){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == target){
//       return i;
//     }
//   }
//   return -1;
// }
// let arr = [2,3,7,15,46];
// let target = 15;
// console.log(indexnumber(arr,target));


// function indexnumber(arr,target){
//   let low = 0;
//   let high = arr.length-1;
//   while(low <= high){
//          let mid = Math.floor((low+high)/2);
//          if(arr[mid] == target) {
//           return mid;
//          }
//          else if(arr[mid] < target){
//           low = mid + 1;
//          }else if(arr[mid] > target){
//           high = mid - 1;
//          }
//   }
//   return -1;
// }
// let arr = [3,5,7,9,15,45];
// let target = 9;
// console.log(indexnumber(arr,target));




// write a function to find sum fo digit number ex-123
//output = 6

// function sumofdigit(num){
//   let sum = 0;
//   while(num > 0){
//      sum += num % 10;
//      num = Math.floor(num/10);
//   }
//   return sum;
// }
// let num = 1234;
// console.log(sumofdigit(num));



//write a function to remove dublicate from string ex-akshay,
//output - akshy

// function dublicatename(str){
//     let ans = "";
//     let hash = {
//     }
//    for(let i = 0; i< str.length; i++){
//     if(hash[str[i]] != true){
//         ans += str[i];
//         hash[str[i]] = true; 
//     }
//    }  
//    return ans;  
// }
// let str = "akshay";
// console.log(dublicatename(str));


// write a function to find second largest number of array


// function SecondLargest(arr) {
//   let first = 0;
//   let second = 0;
//  for (let i = 0; i < arr.length; i++) {
//      let num = arr[i];
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num < first) {
//       second = num;
//     }
//   }
//   return second;
// }
// let arr = [1,2,1,5,7,9,8,11];
// console.log(SecondLargest(arr));



//write a function to cheak if a number is power of 3 return true if satsifiy the question else false

// function ispower(num){
//   if(num<1) return false;
//   while(num % 3 == 0){
//     num = num/3;
//   }
//   return num == 1;
// }
// let num = 81;
// console.log(ispower(num));



// function objectname(arr){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].balance > 100 || arr[i].balance == 100){
//             // res = arr[i].balance; 
//             // console.log(Array.isArray(res));
//             res.push(arr[i]); 
//         }
//     }
//     return res;
// }
// let  arr = [
//   { balance: 233 },{ balance: 17 },{ balance: 491 },{ balance: 78 },{ balance: 350 },{ balance: 19 },{ balance: 402 },{ balance: 101 },{ balance: 5 },{ balance: 220 },{ balance: 299 },{ balance: 410 },{ balance: 72 },{ balance: 389 },{ balance: 141 },{ balance: 43 },{ balance: 326 },{ balance: 471 },{ balance: 265 },{ balance: 120 }
// ];
// console.log(objectname(arr));

// function objectname(arr,value){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].balance != value){
//             res.push(arr[i]); 
//         }
//     }
//     return res;
// }
// let  arr = [
//   { balance: 233 },{ balance: 17 },{ balance: 491 },{ balance: 78 },{ balance: 350 },{ balance: 19 },{ balance: 402 },{ balance: 101 },{ balance: 5 },{ balance: 220 },{ balance: 299 },{ balance: 410 },{ balance: 72 },{ balance: 389 },{ balance: 141 },{ balance: 43 },{ balance: 326 },{ balance: 471 },{ balance: 265 },{ balance: 120 }
// ];

// let value = 233;
// console.log(objectname(arr,value));



// function objectname(arr){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         res.push(arr[i].balance);
        
//     }
//     return res;
// }
// let  arr = [
//   { balance: 233 },{ balance: 17 },{ balance: 491 },{ balance: 78 },{ balance: 350 },{ balance: 19 },{ balance: 402 },{ balance: 101 },{ balance: 5 },{ balance: 220 },{ balance: 299 },{ balance: 410 },{ balance: 72 },{ balance: 389 },{ balance: 141 },{ balance: 43 },{ balance: 326 },{ balance: 471 },{ balance: 265 },{ balance: 120 }
// ];

// let ans = objectname(arr);
// console.log(ans);



// function minmaxnumber(arr){
//   let min = Infinity;
//   let max = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i];
//     }if(arr[i] < min){
//       min = arr[i];
//     }
//   }
//    return {
//     max, min
//    };
// }
// let arr = [1,2,5,4,7,8,10,0];
// console.log(minmaxnumber(arr));


// function timesnumber(arr){
//   let obj = {};
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i]){
//       if(obj[arr[i]]){
//         obj[arr[i]]++;
//       }else {
//         obj[arr[i]] = 1;
//       }
//     }
//   }
//   return obj;
// }
// let arr = [1,2,1,5,2,1,-1,-2,-1];
// console.log(timesnumber(arr));



// function sortArray(arr){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length-i; j++){
//       if(arr[j] > arr[j+1]){
//         temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
// return arr;
// }
// let arr = [32,48,50,30,23,5,46];
// console.log(sortArray(arr));


function twoaddarray(arr,arr1){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    res.push(arr[i]);
  }
  for(let j = 0; j < arr1.length; j++){
    res.push(arr1[j]);
  }
  return res;
}
let arr = [1,2,3,4];
let arr1 = [5,6,7,8,9,10];
console.log(twoaddarray(arr,arr1));