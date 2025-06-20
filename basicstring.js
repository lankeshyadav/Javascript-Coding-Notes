//Reverse a String
//Write a function that takes a string as input and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"


//Check for Palindrome
//Write a function to check if a given string is a palindrome.
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false


//Count Vowels in a String
//Write a function that counts the number of vowels in a given string.
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("hello")); // Output: 2


//Find the Longest Word
//Write a function that returns the longest word in a sentence.
function longestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"


// Capitalize First Letter of Each Word
//Write a function to capitalize the first letter of each word in a string.
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"


//Find the Frequency of a Character
//Write a function to find how many times a specific character appears in a string.
function charFrequency(str, char) {
    return str.split('').filter(c => c === char).length;
}
console.log(charFrequency("hello world", "o")); // Output: 2


//Remove Duplicates
//Write a function to remove duplicate characters from a string.
function removeDuplicates(str) {
    return Array.from(new Set(str)).join('');
}
console.log(removeDuplicates("aabbcc")); // Output: "abc"


//Check if a String Contains Another String
//Write a function to check if one string is a substring of another.
function containsSubstring(mainStr, subStr) {
    return mainStr.includes(subStr);
}
console.log(containsSubstring("hello world", "world")); // Output: true


// Replace a Substring
// Write a function to replace a substring in a string with another string.
function replaceSubstring(str, oldSub, newSub) {
    return str.replace(oldSub, newSub);
}
console.log(replaceSubstring("hello world", "world", "universe")); // Output: "hello universe"


//Repeat a String
//Write a function to repeat a string n times.
function repeatString(str, n) {
    return str.repeat(n);
}
console.log(repeatString("hello", 3)); // Output: "hellohellohello"
