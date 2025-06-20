// function sum(n){
//     for(let i = 1; i <= 10; i++){
//        console.log(n +"x"+ i + "=" + n*i)
//     }
// }
// sum(15);
// sum(8);










// function getmaxprofit(prices){
//    let maxprofit = 0;
//    let len = prices.length;
//    let mincost = 999;
//    for(let i = 0; i < len; i++){
//       if(prices[i] < mincost){
//          mincost = prices[i];
//          console.log(mincost);
//       }else if(prices[i] - mincost > maxprofit){
//          maxprofit = prices[i] - mincost;
//          console.log(maxprofit);
//       }
//    }
//    return maxprofit;
// }
// let prices = [5, 15, 7, 29, 13];
// let profit = getmaxprofit(prices);



// const prices = [20, 15, 2, 7, 13, 29];
// const maxprofit = 0;

// for (let i = 0; i < prices.length-1; i++) {
    
//        const buy = prices[i];
//        const sell = prices[i + 1];
//        const profit = sell - buy;
//        if(buy > profit){
//          maxprofit.push(profit);
//        }
// }

// console.log(maxprofit);



// function getmaxprofit(prices){
//     let maxprofit = 0;
//     let len = prices.length;
//     for(let i = 0; i < len-1; i++){
//         if(prices[i] < prices[i+1]){
//             maxprofit = maxprofit + (prices[i+1] - prices[i]);
//         }
//     }
//     return maxprofit;
// }

// let prices = [5, 15, 2, 7, 13, 29];
// let profit = getmaxprofit(prices);
// console.log(profit);




// function add(num, target){
//       let len = num.length;
//       let hash = new Array(target + 1);
//       for(let i =0; i < len; i++){
//         //for(let j = i+1; j < len; j++){
//         let leftover = target - num[i];
//             if(hash[leftover] != undefined ){
//             return [i, hash[leftover]];
//         }else{
//             hash[num[i]] = i;
//         }
//     //}
//   }
//   return [-1,-1];
// }
// let num = [2,5,7,15,14,11,45];
// let target = 60;
// let total = add(num, target);
// console.log(total);




// function factriol(num){
    
// }
// let xy = 5;



// given a array of integers cheak of any contents dublicate 
// input - [1,2,3,1]
// output - true

function getDublicate(num){
   let len = num.length;
   let hash = new Array[num+1];
   for(let i = 0; i < len; i++){
          
      //for(let j = i+1; j < len; j++){
         if(hash[num[i]] != undefined){
      
            }else if(hash[num[i]] == num[i]){
               return true;            
            }
      //}
   }
   return false;
}
let num = [1,2,3,1];
let result = getDublicate(num);
console.log(result);