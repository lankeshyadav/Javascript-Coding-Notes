//Reverse an Array
//Write a function to reverse an array.
/*function reverseArray(arr) {
    return arr.reverse();
  }
console.log(reverseArray([1, 2, 3, 4, 5]));*/ // Output: [5, 4, 3, 2, 1]


//Find the Maximum Element
//Write a function to find the largest element in an array.
/*function findMax(arr) {
    return Math.max(...arr);
  }
console.log(findMax([3, 1, 4, 1, 5, 9]));*/ // Output: 9


//Remove Duplicates
//Write a function to remove duplicate elements from an array.
/*function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));*/ // Output: [1, 2, 3, 4, 5]
  
 
//Check if an Array is Sorted
//Write a function to check if an array is sorted in ascending order.
/*function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
  console.log(isSorted([1, 3, 2, 4, 5]));*/ // Output: false


//Rotate an Array
//Write a function to rotate an array by k positions.
/*function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
  }
console.log(rotateArray([1, 2, 3, 4, 5], 2));*/ // Output: [4, 5, 1, 2, 3]
  
  
//Find the Second Largest Element
//Write a function to find the second largest element in an array.
/*function secondLargest(arr) {
    const uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
  }
console.log(secondLargest([10, 20, 4, 45, 99]));*/ // Output: 45
  

//Sum of Array Elements
//Write a function to calculate the sum of all elements in an array.
/*function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
console.log(sumArray([1, 2, 3, 4, 5]));*/ // Output: 15
 

//Merge and Sort Two Arrays
//Write a function to merge two arrays and sort the result.
/*function mergeAndSort(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }
console.log(mergeAndSort([3, 1, 4], [6, 5, 2]));*/ // Output: [1, 2, 3, 4, 5, 6]
 

//Count Occurrences of an Element
//Write a function to count the occurrences of a specific element in an array.
/*function countOccurrences(arr, element) {
    return arr.filter(x => x === element).length;
  }
console.log(countOccurrences([1, 2, 3, 2, 2, 4, 5], 2));*/ // Output: 3
 

//Filter Odd Numbers
//Write a function to filter out all odd numbers from an array.
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
  
