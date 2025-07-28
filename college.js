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


// function highstr(str){
//     const result = str.reduce((total,el) => {
//         if(total[el]){
//             total[el]++;
//         }else {
//             total[el] = 1;
//         }
//         return total;
//     }, []);
//     return {
//         result
//     };
// }
// const str = ["a","b","a","c","b","a"];
// console.log(highstr(str));



function studentname(arr){
      const result = arr.filter((el) =>{
       return el.marks.every((mark) => mark >= 40);
      }); 
      const result2 = result.map((el) =>{
        return el.name;
      });
      return result2;
}
const arr = [{name:"raj", marks:[65,70,55]},
{name:"simran", marks:[80,35,78]},
{name:"aman", marks:[90,95,85]}];
console.log(studentname(arr));