function areThereDuplicates(...args) {
    // Create an object to track the frequency of each argument
    let frequencyCounter = {};
    
    // Iterate over each argument and count its occurrences
    for (let val of args) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
        // If a value appears more than once, return true
        if (frequencyCounter[val] > 1) {
            return true;
        }
    }
    
    // If no duplicates were found, return false
    return false;
}

// Test cases
console.log(areThereDuplicates(1, 2, 3));         // false
console.log(areThereDuplicates(1, 2, 2));         // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
