function minSubArrayLen(nums, target) {
    let start = 0;          // Pointer to track the start of the window
    let sum = 0;            // Current sum of the window
    let minLength = Infinity;  // Track the minimum length of subarray

    // Expand the window by moving the `end` pointer
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];  // Add the current element to the sum

        // While the current window sum is greater than or equal to target
        while (sum >= target) {
            // Update the minimum length of subarray
            minLength = Math.min(minLength, end - start + 1);
            // Shrink the window by moving the `start` pointer
            sum -= nums[start];
            start++;
        }
    }

    // If minLength was updated, return it; otherwise return 0
    return minLength === Infinity ? 0 : minLength;
}

// Test cases
console.log(minSubArrayLen([2,3,1,2,4,3], 7));         // 2
console.log(minSubArrayLen([2,1,6,5,4], 9));           // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));  // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));  // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55));  // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11));        // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); // 0

