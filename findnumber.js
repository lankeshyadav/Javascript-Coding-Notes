var findNumbers = function(nums){
    let count = 0;
    for (let num of nums) {
        if (String(num).length % 2 ===0) {
            count++;
        }
    }
    return count;
};

const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums));



function findThirdLargest(arr) {
    if (arr.length < 3) {
        console.log("Array must have at least three distinct elements.");
        
    }

    let first = Number.MIN_SAFE_INTEGER;
    let second = Number.MIN_SAFE_INTEGER;
    let third = Number.MIN_SAFE_INTEGER;

    for (let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second) {
            third = second;
            second = num;
        } else if (num > third) {
            third = num;
        }
    }

    if (third === Number.MIN_SAFE_INTEGER) {
        console.log("Array doesn't have three distinct elements.");
    } else {
        console.log("The third largest element is:", third);
    }
}

// Example usage
const arr = [10, 20, 30, 40, 50];
findThirdLargest(arr);
