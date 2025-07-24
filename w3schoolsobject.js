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


// const fruits = {Banana: 300, Orange: 200, Apples: 500};
// const keys = Object.keys(fruits);
// for(let i = 0; i < keys.length; i++){
//     let fruit = keys[i];
//     console.log(fruit + ": " + fruits[fruit]);
// }


// function person(first, last, age, eye){
//     this.firstName = first;
//     this.latName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
// const myName = new person ("john", "singh", 23, "Black");
// console.log(myName.firstName);

// function person(first, last, age, eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// };
// const myName = new person ("john", "singh", 23, "Black");
// const myUser = new person ("lankesh", "kumar", 23, "White");
// console.log(myName.lastName);
// console.log(myUser);

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.fullName = function() {
//     return this.firstName + " " + this.lastName
//   };
// }
// const myName = new Person("John", "Doe", 50, "blue");
// console.log(myName.fullName());


//javascript object

// const cars = ["BMW",
//     "Tata",
//     "Valvo"
// ];
// console.log(cars[0]);

// const cars = [];
// cars[0]= "Tata";
// cars[1]= "BMW";
// cars[2]= "Volvo";
// console.log(cars);

// const cars = ["Bmw", "Aulto", "nexon"];
// cars[0] = "Scrpio";
// console.log(cars);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// const person = ["john", "singh", 46];
// console.log(person[1]);


// const person = {firstName:"john", lastName:"singh", age:23};
// console.log(person.age);


//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(fruits.length);


//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let fruit = fruits[fruits.length-1];
// console.log(fruits[fruits.length-1]);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let flen = fruits.length;
// let text = " ";
// for(let i = 0; i < flen; i++){
//    text += fruits[i];
// }
// console.log(text);


//douts this code
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = " ";
// fruits.forEach(myFunction);
//     text += " ";
//     function myFunction(value){
//         text += value;
//     }
// console.log(text);


// const fruits = ["Banana", "Apple", "Mango", "Orange"];
// fruits.push("Lemon");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";
// console.log(fruits);


// const person = [];
// person[0] = "john";
// person[1] = "kumar";
// person[2] = 23;
// person[3] = "india";
// person.length;
// console.log(person[3] + " " + person.length);



// const fruits = ["Banana", "Orange", "Mango"];
// // let type = typeof fruits;
// console.log(typeof[fruits]);


// const fruits = ["Banana", "Orange", "Mango"];
// console.log(Array.isArray(fruits));


// const fruits = ["Mango", "Orange", "Apple"];
// console.log(fruits instanceof Array);



// let x = " ";
// const myObj = {
//     name: "John",
//     age:30,
//     cars: [
//         {name:"Ford", models:["Fiesta", "Focus", "Musting"]},
//         {name:"BMW", models:["320", "X3", "X5"]},
//         {name:"Fiat", models:["500", "Panda"]}
//     ]
// }
// for(let i in myObj.cars){
//     x += myObj.cars[i].name;
//     for(let j in myObj.cars[i].models){
//         x += myObj.cars[i].models[j];
//     }
// }
// console.log(x);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join("="));



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("coconut");
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[0] = "kiwi";
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";
// console.log(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(fruits);


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);


// const arr = ["Emil", "Tobias", "Linus"];
// const myChildren = arr.concat(23);
// console.log(myChildren);

// const fruits = ["Banana", "Orange", "Mango", "Apple"];
// fruits.copyWithin(2,0);
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
// fruits.copyWithin(2, 0, 3);
// console.log(fruits);

// const fruits = ["Banana", "Mango", "Apple", "Papaya"];
// const citus = fruits.slice(1,3);
// console.log(citus);





// function number(arr){
//     const res = arr.filter((element) => {
//         return element > 0;
//     });
//     return res;
// }
// const arr = [2,2,3,4,-5,-1];
// console.log(number(arr));




// function namestr(str){
//     let upperCase = [];
//     str.forEach((element) => {
//     // element.toUpperCase();
//     upperCase.push(element.toUpperCase());
// });
// return upperCase;
// }
// let str = ["name", "kumar"];
// console.log(namestr(str));




