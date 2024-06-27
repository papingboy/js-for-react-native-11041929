// arrayManipulation.js

function processArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    return arr.map(num => {
        if (typeof num !== 'number') {
            throw new Error("Array must contain only numbers");
        }

        if (num % 2 === 0) {
            return num * num; // Square even numbers
        } else {
            return num * 3; // Triple odd numbers
        }
    });
}

function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
let processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

let strings = ["Hello", "World", "JavaScript"];
let formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ['hello', 'WORLD', 'javascript']