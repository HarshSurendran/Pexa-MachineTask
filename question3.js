// You are given an array containing n distinct numbers taken from the range 1 to (n+1). One number is missing from the sequence. Your task is to find the first missing number.

// Constraints:
// * The array contains n elements.
// * The sequence is supposed to be from 1 to (n+1), with only one missing number.
// * Find only the first missing number if multiple numbers are missing.

// Function Signature:

function findMissingNumber(arr) {
    let totalSum = ((arr.length + 1) * (arr.length + 2)) / 2;
    let currentSum = arr.reduce((acc, curr) => {
        return acc + curr;
    });
    console.log(totalSum, currentSum);
    return totalSum - currentSum; 
}

const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); 
console.log(findMissingNumber(arr2)); 