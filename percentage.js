var per = prompt("Enter your percentage: ");
if(per >= 80 && per <= 100){
    console.log("merit");
}else if(per >= 60 && per < 79){
      console.log("1st Division");
}else if(per >= 45 && per < 59){
    console.log("2nd Division");
}else if(per >= 33 && per < 44){
    console.log("3rd Division");
}else if(per >= 0 && per <= 33){
    console.log("fail");
}else{
    console.log("Not a valid");
}
