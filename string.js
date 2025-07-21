// const str = "javascript";
// console.log(str.charAt(6));

// const str1 = "html";
// const str2 = "css";
// const str3 = "javascript";
// console.log(str1.concat(" ", str2," ", str3));

// const str1 = "javascript";
// console.log(str1.includes("s"));

// const str1 = "javascript";
// console.log(str1.indexOf("r"));


// const str = "javascript";
// console.log(str.slice(4,9));


// const str = "javascript";
// console.log(str.substring(9,2));

// const str = "JAVASCRIPT";
// console.log(str.toLowerCase());


// const str ="javascript";
// console.log(str.toUpperCase());

// const str = "    javascript    ";
// console.log(str.trim());

// function getmaxprofit(prices){
//    let maxprofit = 0;
//    let len = prices.length;
//    let mincost = 999;
//    for(let i = 0; i < len; i++){
//       if(prices[i] < mincost){
//          mincost = prices[i];
//       }else if(prices[i] - mincost > maxprofit){
//          maxprofit = prices[i] - mincost;
//       }
//    }
//    return maxprofit;
// }
// let prices = [5, 15 , 2, 7, 29, 13];
// let profit = getmaxprofit(prices);
// console.log(profit);



// function getmaxprofit(prices){
//    let maxprofit = 0;
//    let mincost = 999;
//    let len = prices.length;
//    for(let i = 0; i < len; i++){
//     if(prices[i] < mincost){
//        mincost = prices[i];
//     }else if(prices[i] - mincost > maxprofit){
//          maxprofit = prices[i] - mincost;
//       }
//    }
//    return {
//       buyprice : mincost,
//       sellingprice : mincost + maxprofit
//    }
// }
// let prices = [5, 15, 2, 7, 29, 13];
// let profit = getmaxprofit(prices);
// console.log(prices.indexOf(profit.buyprice), prices.indexOf(profit.sellingprice));



//add to last element 
// const arr = [1, 2, 3];
// arr.push(4,5);
// console.log(arr);


//removes element last positin
// const arr = [1,2,3,4,5];
// arr.pop();
// console.log(arr);


//add to first element
// const arr = [1,2,3,4,5,6];
// arr.unshift(5);
// console.log(arr);

// let name = "lankesh";
// function myname(){
//    let name = "kumar";
//    console.log(name);
//    function hello(){
//     let x = 5;
//     console.log(x);

//     function profit(){
//        let x = 8;
//        let y = 9;
//        if(x < y){
//         console.log("profit");
//        } else {
//         console.log("loss");
//        }
//     }
//     profit();
//    }
//    hello();
// }
// myname();