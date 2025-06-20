//Write a function to check if a number is even.
/*function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(7));*/ // false


//Create a function to calculate the factorial of a number.
/*function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
console.log(factorial(0));*/ // 1


// Write a function to reverse a string.
/*function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript"));*/ // "tpircSavaJ"


//Create a function to check if a string is a palindrome.
/*function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello"));*/ // false



//Write a function to find the largest number in an array.
/*function findLargest(arr) {
    return Math.max(...arr);
}
console.log(findLargest([1, 5, 3, 9, 2])); // 9
console.log(findLargest([-1, -5, -3, -9, -2]));*/ // -1


//Create a function to calculate the sum of all elements in an array.
/*function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(arraySum([1, 2, 3, 4, 5])); // 15
console.log(arraySum([-1, -2, -3, -4, -5]));*/ // -15


//Write a function to check if a number is prime.
/*function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10));*/ // false


//Create a function to merge two arrays and remove duplicates.
/*function mergeAndRemoveDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4]));*/ // [1, 2, 3, 4]


//Write a function to count the number of vowels in a string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("JavaScript")); // 3



