function maxSubarraySum(arr, num) {
    // If the array has fewer elements than 'num', return null
    if (arr.length < num) return null;

    // Calculate the initial sum of the first 'num' elements
    let maxSum = 0;
    let tempSum = 0;

    // Sum the first 'num' elements
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    // Assign the initial maxSum to tempSum
    tempSum = maxSum;

    // Now, slide the window through the array, from index 'num' to the end
    for (let i = num; i < arr.length; i++) {
        // Slide the window: subtract the element going out of the window and add the one coming in
        tempSum = tempSum - arr[i - num] + arr[i];
        // Update the maximum sum if the new window sum is larger
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// Test cases
console.log(maxSubarraySum([100, 200, 300, 400], 2));        // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));       // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3));                      // null
