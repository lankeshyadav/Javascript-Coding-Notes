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



const products = (arr) =>
    arr.find((el) => el.inStock == true && el.ratings.some((ratings) => ratings > 4));
const arr = [{ name: "A", inStock: false, ratings: [3, 2] },
{ name: "B", inStock: true, ratings: [3, 5] },
{ name: "C", inStock: true, ratings: [5, 3] }
];
console.log(products(arr));