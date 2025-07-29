// function products(arr){
//       const result = arr.filter((el) => {
//         if(el.inStock == true && el.ratings.some((ratings) => ratings > 4)){
//             return true;
//         }
//       });
//     const result2 = result.reduce((array) => {
//         return array;
//     },);
//     return result2;
//     // return result;
// }
// const arr = [{name:"A", inStock:false, ratings:[3,2]},
//              {name:"B", inStock:true, ratings:[3,5]},
//             {name:"C", inStock:false, ratings:[5,3]}
//            ];
// console.log(products(arr));           



// const products = (arr) =>
//     arr.find((el) => el.inStock == true && el.ratings.some((ratings) => ratings > 4));
// const arr = [{ name: "A", inStock: false, ratings: [3, 2] },
// { name: "B", inStock: true, ratings: [3, 5] },
// { name: "C", inStock: true, ratings: [5, 3] }
// ];
// console.log(products(arr));



// function totalscore(arr){
//     const result = arr.reduce((total,el,i) => {
//         return {
//             score: total.score + el.score,
//             Average: +((total.score + el.score) / (i+1)).toFixed(2),
//         }
//     }, {score:0 , Average: 0});
//     return result;
// }
// const arr = [{name:"virat", score:70},
//     {name:"rohit", score:50},
//     {name:"rahul", score:80},
// ];
// console.log(totalscore(arr));



// function totalscore(arr){
//     const result = arr.reduce((total,el,i) => {
//         return {
//            score: total.score + el.score,
//            Average: +((total.score + el.score)/(i+1)).tofixed(2)
//         };
//     },{score:0, Average:0});
//     return result;
// }
// const arr = [{name:"virat", score:70},
//     {name:"rohit", score:50},
//     {name:"rahul", score:80},
// ];
// console.log(totalscore(arr));


// function frequecy(arr){
//     const result = arr.reduce((total,el) => {
//         if(total[el]){
//             total[el]++;
//         }else {
//             total[el] = 1;
//         }
//         return total;
//     }, {});
//     console.log(result);
//     let maxcount = 0;
//     let mostfrequent = null;
//     for(const key in result){
//       if(result[key] > maxcount){
//         maxcount = result[key];
//         mostfrequent = key;
//       }
//     }
//     return mostfrequent;
// }
// const arr = ["a","b","a","c","b","a"];
// console.log(frequecy(arr));





// function studentstore(arr){
//   const result = arr.filter((el) => {
//     const find = el.marks.every((mark) => mark >= 40);
//       const Average = el.marks.reduce((total,mark) => total + mark)/el.marks.length;
//     return find && Average >= 60;
//   })
//   let final = result.map((el) => {
//     return el.name;
//   })
//   return final;
// }
// const arr = [{name:"raj", marks:[65,70,65]},
// {name:"simran", marks:[80,35,78]},
// {name:"aman", marks:[90,95,85]}
// ];
// console.log(studentstore(arr));



// function finalprice(arr){
//       const result = arr.filter((el) => {
//         return el.isDiscount == true;
//       });
//       const final = result.reduce((total,el) => {
//         return total += el.price * el.quantity;
//       },0);
//       return final;
// }
// const arr = [{name:"A", price:100, quantity:2, isDiscount:true},
//   {name:"B", price:200, quantity:1, isDiscount:false},
//   {name:"C", price:150, quantity:3, isDiscount:true}
// ];
// console.log(finalprice(arr));


// const finalprice = (arr) =>
//       arr.filter((el) => el.isDiscount == true).reduce((total,el) => total += el.price * el.quantity,0);
// const arr = [{name:"A", price:100, quantity:2, isDiscount:true},
//   {name:"B", price:200, quantity:1, isDiscount:false},
//   {name:"C", price:150, quantity:3, isDiscount:true}
// ];
// console.log(finalprice(arr));






 