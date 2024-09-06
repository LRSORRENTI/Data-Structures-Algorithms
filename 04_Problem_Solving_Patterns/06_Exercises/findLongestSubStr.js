function findLongestSubstring(str) {
    let longest = 0;        // To store the length of the longest substring
    let seen = {};          // To store the last seen position of characters
    let start = 0;          // Start pointer for the sliding window

    // Loop through the string using the end pointer
    for (let end = 0; end < str.length; end++) {
        let char = str[end];

        // If the character is already in the window, move the start pointer
        if (seen[char] !== undefined && seen[char] >= start) {
            start = seen[char] + 1;
        }

        // Update the last seen position of the current character
        seen[char] = end;

        // Calculate the length of the current window and update the longest
        longest = Math.max(longest, end - start + 1);
    }

    return longest;
}

// Test cases
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
