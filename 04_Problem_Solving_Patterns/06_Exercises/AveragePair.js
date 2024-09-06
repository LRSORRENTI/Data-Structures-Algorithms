function averagePair(arr, targetAvg) {
    // Initialize two pointers
    let left = 0;
    let right = arr.length - 1;

    // Continue until the two pointers meet
    while (left < right) {
        // Calculate the average of the current pair
        let avg = (arr[left] + arr[right]) / 2;

        // If the average matches the target average, return true
        if (avg === targetAvg) {
            return true;
        }
        // If the average is less than the target, move the left pointer up
        else if (avg < targetAvg) {
            left++;
        }
        // If the average is greater than the target, move the right pointer down
        else {
            right--;
        }
    }

    // If no valid pair is found, return false
    return false;
}

// Test cases
console.log(averagePair([1, 2, 3], 2.5));               // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));     // false
console.log(averagePair([], 4));                        // false
