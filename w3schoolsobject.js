// const car = {type:"fait", model:"500", color:"white"};
// console.log(car);


// let car = "fiat";
// console.log(car);

// const car = {type:"fait", model:"500", color:"white"};
// console.log("this car type is" + " " +car.color);


//javascript object literal
//an object literal is a list of name:value pairs inside curly braces{}
// const person = {firstName:"john", lastName:"singh", age: 40, eyeColor:"black"};
// console.log(person.eyeColor);

// const person = {
//     firstName:"lankesh",
//     lastName :"kumar",
//     age: 50,
//     eyeColor:"black"
// }
// console.log(person.firstName);


// const person = {};
// person.firstName = "Lankesh";
// person.lastName = "kumar";
// person.age = 50;
// person.eyeColor = "black";
// console.log(person.lastName);


// const person = new Object();
// person.firstName = "lankesh";
// person.lastName = "kumar";
// person.age = 22;
// console.log(person["firstName"]);
// console.log(person.lastName);


// const person = {
// firstName : "lankesh",
// lastName : "kumar",
// age : 22,
// fullName: function(){
//     return this.firstName + " " + this.lastName;
// }

// };
// console.log(person.fullName());

// const person = {
//     firstName: "Lankesh",
//     lastName: "Yadav",
//     age: 23,
//     eyeColor: "Black"
// }
// const x = person;
// x.age = 30;
// console.log(x.age);


// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue"
// };
// let x = "firstname";
// let y = "age";
//console.log(person["firstname"] + " is " +person["age"] + " years old");
//console.log(person[x] + " is " + person[y] + " years old");


//const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue"
// };
// delete person.firstname;
// console.log(person["firstname"] + " is " +person["age"] + " years old");


// const myObj = {
//     name : "Lankesh",
//     age : 30,
//     myCars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Aulto"
//     }
// }

// // let p1 = "myCars";
// let p2 = "car2";
// // console.log(myObj.myCars.car2);
// console.log(myObj.myCars[p2]);


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     return this.firstName + " " + this.lastName + " of " + this.id;
//   }
// };
// console.log(person.fullName())


// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
// };
// person.name = function() {
//   return this.firstName.toUpperCase() + " " + this.lastName;
// };
// console.log("my name is " + person.name());


// const person = {
//     name: "john",
//     age: 23,
//     city: "New Yotrk"
// };
// const res = Object.values(person);
// console.log(res);


const fruits = {Banana: 300, Orange: 200, Apples: 500};
const keys = Object.keys(fruits);
for(let i = 0; i < keys.length; i++){
    let fruit = keys[i];
    console.log(fruit + ": " + fruits[fruit]);
}






