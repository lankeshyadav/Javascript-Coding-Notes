// const highscored = (arr) => {
//      const result = arr.filter((el) => {
//         for(let i = 0; i < el.marks.length; i++){
//             if(el.marks[i] <= 40) return false;
//         }
//         return true;
//      }).map((el) => el.name);
//      return result;
// }

// const arr = [{name:"Akshay", marks:[45,67,89]},
//             {name:"rohit", marks:[33,55,60]},
//             {name:"neha", marks:[50,51,49]}];
// console.log(highscored(arr));


const highscored = (arr) => {
     const result = arr.filter((el) => {
        return el.marks.every((mark) => mark > 40);
     }).map((el) => el.name);
   return result;
} 
const arr = [{name:"Akshay", marks:[45,67,89]},
            {name:"rohit", marks:[33,55,60]},
            {name:"neha", marks:[50,51,49]}];
console.log(highscored(arr));            