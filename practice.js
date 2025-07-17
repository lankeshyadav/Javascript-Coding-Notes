
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

function dublicatename(str){
    let ans = "";
    let hash = {

    }
   for(let i = 0; i< str.length; i++){
    if(hash[str[i]] != true){
        ans += str[i];
        hash[str[i]] = true; 

    }

   }  
   return ans;  
}
let str = "akshay";
console.log(dublicatename(str));


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