function sameFrequency(num1, num2) {
    // Convert numbers to strings
    let str1 = num1.toString();
    let str2 = num2.toString();
    
    // If the lengths of the two numbers are different, they can't have the same frequency
    if (str1.length !== str2.length) return false;

    // Create an object to count the frequency of digits in the first number
    let freqCounter1 = {};
    for (let char of str1) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }

    // Create an object to count the frequency of digits in the second number
    let freqCounter2 = {};
    for (let char of str2) {
        freqCounter2[char] = (freqCounter2[char] || 0) + 1;
    }

    // Compare the two frequency objects
    for (let key in freqCounter1) {
        if (freqCounter1[key] !== freqCounter2[key]) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(sameFrequency(182, 281));            // true
console.log(sameFrequency(34, 14));              // false
console.log(sameFrequency(3589578, 5879385));    // true
console.log(sameFrequency(22, 222));             // false
