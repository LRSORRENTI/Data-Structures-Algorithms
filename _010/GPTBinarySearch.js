/**
 * Performs a binary search on a sorted array to find the index of a target element.
 * @param arr The sorted array to search.
 * @param target The target element to find.
 * @returns The index of the target element in the array, or -1 if it is not found.
 */
function binarySearch(arr, target) {
    // Initialize left and right pointers to start and end of array, respectively.
    var left = 0;
    var right = arr.length - 1;
    // While the left pointer is less than or equal to the right pointer...
    while (left <= right) {
        // Calculate the midpoint of the search interval.
        var mid = Math.floor((left + right) / 2);
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
var arr = [1, 3, 5, 7, 9];
var target = 5;
var index = binarySearch(arr, target);
console.log(index); // Output: 2

var myArr = ["hello", "world", "My", "Name", "Is", "Rustacean", "I", "Like", "rust"];
var next = 9;
var ind = binarySearch(arr, next)
console.log(ind)


/**
 * Performs a binary search on a sorted array of objects to find a key-value pair and extract its value.
 * @param arr The sorted array of objects to search.
 * @param targetKey The key of the key-value pair to find.
 * @returns The value of the key-value pair, or null if it is not found.
 */
function binarySearch(objArr: Record<string, any>[], targetKey: string): any {
    // Initialize left and right pointers to start and end of array, respectively.
    let left = 0;
    let right = objArr.length - 1;
  
    // While the left pointer is less than or equal to the right pointer...
    while (left <= right) {
      // Calculate the midpoint of the search interval.
      const mid = Math.floor((left + right) / 2);
  
      // If the midpoint object has the target key, extract its value and return it.
      if (objArr[mid].hasOwnProperty(targetKey)) {
        return objArr[mid][targetKey];
      }
      // If the midpoint object's key is less than the target key, discard the left half of the search interval.
      else if (objArr[mid][targetKey] < targetKey) {
        left = mid + 1;
      }
      // If the midpoint object's key is greater than the target key, discard the right half of the search interval.
      else {
        right = mid - 1;
      }
    }
  
    // If the target key is not found, return null.
    return null;
  }
  
  // Example usage
  const objArr = [
    { food: 'kiwi', color: 'lime green' },
    { music: 'jazz', isCool: 'yes' },
    { dogs: 'Are awesome', key2: true },
    { cats: 'are noble', key2: true },
    { fish: 'Salmon', omega3: true },
  ];
  const targetKey = 'key2';
  const value = binarySearch(objArr, targetKey);
  console.log(value); // Output: "value2"
  