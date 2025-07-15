
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
// 1 <= n <= 10^6

// Test Case 1: arr: [2,3,7,15,46]   target: 15
// Output:      3

function indexnuber(arr,target){
  let target = 15;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == target){
      target = arr[i];
    }
  }
  return target;
}
let arr = [2,3,7,15,46];
console.log(indexnuber(arr));
