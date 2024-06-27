// userInfo.js

// Function to process the array of numbers
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

// Function to format the array of strings based on the processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    if (!Array.isArray(names) || !Array.isArray(modifiedNames)) {
        throw new Error("Both arguments must be arrays");
    }

    if (names.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1 // Auto-incremented ID starting from 1
        };
    });
}

// Example usage
let originalNames = ["Alice", "Bob", "Charlie"];
let processedNumbers = processArray([1, 2, 3]);
let modifiedNames = formatArrayStrings(originalNames, processedNumbers);
let userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

// Expected output:
// [
//   { originalName: "Alice", modifiedName: "alice", id: 1 },
//   { originalName: "Bob", modifiedName: "BOB", id: 2 },
//   { originalName: "Charlie", modifiedName: "charlie", id: 3 }
// ]