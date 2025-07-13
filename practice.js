
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

for(let i = 0; i <= 5; i++){
    let star = "";
    for(let j = 0; j <= 4; j++){
        
        let starposition = 5-i;
        star += starposition <= j ? '*' : ' '; 
    }
    console.log(star); 
}