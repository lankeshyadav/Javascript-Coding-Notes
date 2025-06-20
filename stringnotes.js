//chartAt():- Returns the character at a specified index.
//Syntex:- String.charAt(index).
// const str = "javascript";
// console.log(str.charAt(4));

//concat():-combines two or more string into one
//Syntex:- string.concat(str2,str3).
  // const str1 = "Lankesh";
  // const str2 = "Kumar";
  // const str3 = "jamshedpur";
  // console.log(str1.concat(" ",str2," ",str3," ","dimna"));
  // console.log("mango".concat(" ",str2," ",str3," ","dimna"));

//includes():-Checks if a string contains a specified value returns true or false
//Syntex:- string.includes(searchvalue,startposition).
// const str = "javascript is Awesome";
// console.log(str.includes("pt "));

//indexOf():-Returns the index of the first occurrence of a specified value and Returns-1 if not found
//Syntex:-String.indexOf(searchvalue,startposition).
// const str = "javascript";
// console.log(str.indexOf("ja"));

//Slice():-Extracts a section of a string and returns it as a new String
//Syntax:- string.slice(startIndex,endIndex). // end index is not includes
// const str = "javascript";
// console.log(str.slice(0,3));

//SubString():- Similar to slice(), but does not support negative indices
//Syntax:- String.substring(startIndex,endIndex)
// const str = "javascript";
// console.log(str.substring(4,8));

//split():-splits a string into an array of substrings
//Syntex:- String.split(separator,limit)
// const str = "hello world";
// console.log(str.split("o"));

//tolowerCase():-converts all characters of a string to lowerCase
//Syntax:- String.tolowerCase()
// const str = "Javascript";
// console.log(str.toLowerCase());

//toUpperCase():-converts all characters of a string to UpperCase
//Syntax:- String.toUpperCase()
/*const str = "javascript";
console.log(str.toUpperCase());*/

//trim():-Removes whiteSpace from both ends of a string
//Syntax:-String.trim()
const str = "   hello world  ";
console.log(str.trim());