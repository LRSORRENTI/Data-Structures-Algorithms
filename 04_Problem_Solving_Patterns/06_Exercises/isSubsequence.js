function isSubsequence(str1, str2) {
    // Initialize two pointers
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2
    
    // Traverse str2
    while (j < str2.length) {
        // If characters match, move the pointer in str1
        if (str1[i] === str2[j]) {
            i++;
        }
        
        // Move the pointer in str2
        j++;
        
        // If we've moved through all characters in str1, return true
        if (i === str1.length) {
            return true;
        }
    }
    
    // If we've reached the end of str2 and haven't found the whole subsequence, return false
    return i === str1.length;
}

// Test cases
console.log(isSubsequence('hello', 'hello world'));  // true
console.log(isSubsequence('sing', 'sting'));         // true
console.log(isSubsequence('abc', 'abracadabra'));    // true
console.log(isSubsequence('abc', 'acb'));            // false (order matters)
