
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
for(let i = 1; i <= 5; i++){
    let count = "";
    
    for(let j = 1; j <= i; j++){
        count += j;
    }
    
    console.log(count);
}