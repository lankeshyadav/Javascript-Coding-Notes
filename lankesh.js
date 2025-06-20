
//if else
var a = 30;
if(a>30){
    console.log("X is greater");
} else {
    console.log("X is Smaller");
}



var name = 'lankesh';
var gender = "male";
if(gender == "male"){
    console.log("hello mr." + name);
}else {
    console.log("hello miss." + name);
}

// if else if
var time = 21;
if(time < 10){
    console.log("good morning");
} else if(time > 20){
    console.log("good evening");
}else {
    console.log("lankesh");
}


var per = 120;
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


// conditional ternary operator
//rule1
var a = 120;
var b;
(a == 100)? b="true" : b="false";
console.log(b);

//rule2
var a = 100;
var b;
b = (a == 100)? "true": "false";
console.log(b);

//rule3
var a = 100;
var b;
b = "value is" + (a == 100)? "true": "false";
console.log(b);


//switch statement

var day = 0;
switch(day){
    case 0:
    console.log("today is monday");
    break;
    case 1:
    console.log("today is tuesday");
    break;
    case 2:
    console.log("today is wednesday");
    break;
    case 3:
    console.log("today is thusday");
    break;
    case 4:
    console.log("today is friday");
    break;
    case 5:
    console.log("today is saturday");
    break;
    case 6:
    console.log("today is sunday");
    break;
    default:
        console.log("invalid day");
}


var age = 31;
switch(true){
    case(age >= 15 && age <= 20):
    console.log("eligible");
    break;
    case(age >= 21 && age < 30):
    console.log("not eligible");
    break;
    default:
    console.log("invalid");
}


//alert box

alert("hello");

var a = 10;
var b = 20;
if(a > b){
    alert("A is greater");
}else {
    alert("B is greater");
}