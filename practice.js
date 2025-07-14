
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



let number = 10;
function isPrime(num) {
  let len = num/2; 
  for (let i = 2; i <= len; i++) {
    if (num % i == 0 || num <= 1) {
      return false;
    } 
  }
  return true; 
}
if (isPrime(number)) {
  console.log(number + " is a Prime Number");
} else {
  console.log(number + " is Not a Prime Number");
}

