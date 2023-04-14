/**
 * Performs a binary search on a sorted array to find the index of a target element.
 * @param arr The sorted array to search.
 * @param target The target element to find.
 * @returns The index of the target element in the array, or -1 if it is not found.
 */
function binarySearch(arr: number[], target: number): number {
    // Initialize left and right pointers to start and end of array, respectively.
    let left = 0;
    let right = arr.length - 1;
  
    // While the left pointer is less than or equal to the right pointer...
    while (left <= right) {
      // Calculate the midpoint of the search interval.
      const mid = Math.floor((left + right) / 2);
  
      // If the midpoint element is equal to the target element, return its index.
      if (arr[mid] === target) {
        return mid;
      }
      // If the midpoint element is less than the target element, discard the left half of the search interval.
      else if (arr[mid] < target) {
        left = mid + 1;
      }
      // If the midpoint element is greater than the target element, discard the right half of the search interval.
      else {
        right = mid - 1;
      }
    }
  
    // If the target element is not found, return -1.
    return -1;
  }
  
  // Example usage
  const arr = [1, 3, 5, 7, 9];
  const target = 5;
  const index = binarySearch(arr, target);
  console.log(index); // Output: 2
  