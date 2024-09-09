// Write a function called power which accepts a 
// base and an exponent. The function should return the 
// power of the base to the exponent. This function 
// should mimic the functionality of Math.pow()  - 
// do not worry about negative bases and exponents.

function power(base, exponent) {
    // Base case: any number raised to the power of 0 is 1
    if (exponent === 0) {
      return 1;
    }
    
    // Recursive case: multiply the base by the result of base raised to the power of (exponent - 1)
    return base * power(base, exponent - 1);
  }
  
  // Example usage:
  console.log(power(2, 3)); // Output: 8
  console.log(power(5, 2)); // Output: 25
  

//   Write a function factorial which accepts a number 
//   and returns the factorial of that number. A 
//   factorial is the product of an integer and all 
//   the integers below it; e.g., factorial four ( 4! ) 
//   is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
//   factorial zero (0!) is always 1.

function factorial(n) {
    // Base case: 0! is 1
    if (n === 0) {
      return 1;
    }
    
    // Recursive case: multiply n by the factorial of (n - 1)
    return n * factorial(n - 1);
  }
  
  // Example usage:
  console.log(factorial(4)); // Output: 24
  console.log(factorial(5)); // Output: 120
  console.log(factorial(0)); // Output: 1
  

// Write a function called productOfArray which takes
// in an array ofnumbers and returns the product of them all.

function productOfArray(arr) {
    // Base case: if the array is empty, return 1 (neutral element for multiplication)
    if (arr.length === 0) {
      return 1;
    }
    
    // Recursive case: multiply the first element by the result of productOfArray for the rest of the array
    return arr[0] * productOfArray(arr.slice(1));
  }
  
  // Example usage:
  console.log(productOfArray([1, 2, 3, 4])); // Output: 24
  console.log(productOfArray([2, 5, 6]));    // Output: 60
  console.log(productOfArray([10]));         // Output: 10


// Write a function called recursiveRange which
// accepts a number and adds up all the numbers
// from 0 to the number passed to the function 

function recursiveRange(n) {
    // Base case: if n is 0, return 0
    if (n === 0) {
      return 0;
    }
    
    // Recursive case: return n plus the sum of numbers from 0 to (n - 1)
    return n + recursiveRange(n - 1);
  }
  
  // Example usage:
  console.log(recursiveRange(6)); // Output: 21 (6 + 5 + 4 + 3 + 2 + 1 + 0)
  console.log(recursiveRange(10)); // Output: 55 (10 + 9 + 8 + ... + 0)
  

// Write a recursive function called fib which
// accepts a number and returns the nth number 
// in the Fibonacci sequence. Recall that the 
// Fibonacci sequence is the sequence of whole 
// numbers 1, 1, 2, 3, 5, 8, ... which starts with 1
// and 1, and where every number thereafter is equal
// to the sum of the previous two numbers.

function fib(n) {
    // Base cases: fib(1) and fib(2) both return 1
    if (n === 1 || n === 2) {
      return 1;
    }
    
    // Recursive case: the nth Fibonacci number is the sum of the (n-1)th and (n-2)th numbers
    return fib(n - 1) + fib(n - 2);
  }
  
  // Example usage:
  console.log(fib(4)); // Output: 3
  console.log(fib(6)); // Output: 8
  console.log(fib(10)); // Output: 55
  
// Write a recursive function called reverse which 
// accepts a string and returns a new string in reverse.

function reverse(str) {
    // Base case: if the string is empty, return an empty string
    if (str.length === 0) {
      return '';
    }
  
    // Recursive case: take the last character and add it to the result of reversing the rest of the string
    return str[str.length - 1] + reverse(str.slice(0, -1));
  }
  
  // Example usage:
  console.log(reverse('hello')); // Output: 'olleh'
  console.log(reverse('world')); // Output: 'dlrow'
  console.log(reverse('abcde')); // Output: 'edcba'

//   Write a recursive function called isPalindrome 
//   which returns true if the string passed to it is a 
//   palindrome (reads the same forward and backward). 
//   Otherwise it returns false.

function isPalindrome(str) {
    // Base case 1: if the string has 0 or 1 character, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Base case 2: if the first and last characters don't match, it's not a palindrome
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    // Recursive case: check the substring without the first and last characters
    return isPalindrome(str.slice(1, -1));
  }
  
  // Example usage:
  console.log(isPalindrome('racecar')); // Output: true
  console.log(isPalindrome('hello'));   // Output: false
  console.log(isPalindrome('madam'));   // Output: true

//   Write a recursive function called someRecursive 
//   which accepts an array and a callback. The 
//   function returns true if a single value in the 
//   array returns true when passed to the callback. 
//   Otherwise it returns false.

  function someRecursive(arr, callback) {
    // Base case: if the array is empty, return false (no value satisfied the callback)
    if (arr.length === 0) {
      return false;
    }
    
    // Check if the first element satisfies the callback
    if (callback(arr[0])) {
      return true;
    }
    
    // Recursive case: check the rest of the array
    return someRecursive(arr.slice(1), callback);
  }
  
  // Example usage:
  const isOdd = (num) => num % 2 !== 0;
  
  console.log(someRecursive([1, 2, 3, 4], isOdd)); // Output: true (1 is odd)
  console.log(someRecursive([4, 6, 8], isOdd));    // Output: false (no odd numbers)
  console.log(someRecursive([2, 4, 6, 7], isOdd)); // Output: true (7 is odd)
  

//   Write a recursive function called flatten which 
//   accepts an array of arrays and returns a new 
//   array with all values flattened.

function flatten(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) {
      return [];
    }
    
    // If the first element is an array, recursively flatten it and concatenate with the rest of the array
    if (Array.isArray(arr[0])) {
      return flatten(arr[0]).concat(flatten(arr.slice(1)));
    }
    
    // If the first element is not an array, include it and recursively flatten the rest of the array
    return [arr[0]].concat(flatten(arr.slice(1)));
  }
  
  // Example usage:
  console.log(flatten([1, 2, [3, 4], [[5], [6]]])); // Output: [1, 2, 3, 4, 5, 6]
  console.log(flatten([[1, [2, 3]], 4, [5]]));      // Output: [1, 2, 3, 4, 5]
  console.log(flatten([[[[1]]], [[2, 3]]]));        // Output: [1, 2, 3]
  
//   Write a recursive function called capitalizeFirst. 
//   Given an array of strings, capitalize the first 
//   letter of each string in the array.

function capitalizeFirst(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) {
      return [];
    }
    
    // Capitalize the first letter of the first string
    const capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);
    
    // Recursive case: return the capitalized string and apply capitalizeFirst to the rest of the array
    return [capitalized].concat(capitalizeFirst(arr.slice(1)));
  }
  
  // Example usage:
  console.log(capitalizeFirst(['car', 'taco', 'banana'])); 
  // Output: ['Car', 'Taco', 'Banana']
  
  console.log(capitalizeFirst(['apple', 'orange', 'grape'])); 
  // Output: ['Apple', 'Orange', 'Grape']

//   Write a recursive function called nestedEvenSum. 
//   Return the sum of all even numbers in an object 
//   which may contain nested objects.

function nestedEvenSum(obj) {
    let sum = 0;
  
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        // If the value is an object, recursively call nestedEvenSum on it
        sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
        // If the value is an even number, add it to the sum
        sum += obj[key];
      }
    }
  
    return sum;
  }
  
  // Example usage:
  const obj1 = {
    a: 2,
    b: { b1: 3, b2: 4, b3: { b31: 8, b32: 7 } },
    c: 5,
    d: { d1: 6 }
  };
  
  console.log(nestedEvenSum(obj1)); // Output: 20 (2 + 4 + 8 + 6)
  
  const obj2 = {
    x: 1,
    y: { y1: 2, y2: { y21: 10, y22: 11 }, y3: 4 },
    z: { z1: { z11: 12 }, z2: 3 }
  };
  
  console.log(nestedEvenSum(obj2)); // Output: 28 (2 + 10 + 4 + 12)

//   Write a recursive function called capitalizeWords. 
//   Given an array of words, return a new array 
//   containing each word capitalized.

function capitalizeWords(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) {
      return [];
    }
  
    // Capitalize the word and recursively capitalize the rest of the array
    const capitalizedWord = arr[0].toUpperCase();
    
    // Return the capitalized word concatenated with the rest of the capitalized array
    return [capitalizedWord].concat(capitalizeWords(arr.slice(1)));
  }
  
  // Example usage:
  console.log(capitalizeWords(['hello', 'world', 'javascript'])); 
  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']
  
  console.log(capitalizeWords(['foo', 'bar', 'baz'])); 
  // Output: ['FOO', 'BAR', 'BAZ']

//   Write a function called stringifyNumbers which 
//   takes in an object and finds all of the values 
//   which are numbers and converts them to strings. 
  
//   Recursion would be a great way to solve this!

//   The exercise intends for you to create a new 
//   object with the numbers converted to strings, 
//   and not modify the original. Keep the original 
//   object unchanged.

function stringifyNumbers(obj) {
    let newObj = {};
  
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        // If the value is a number, convert it to a string
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        // If the value is an object (but not an array), recursively call stringifyNumbers
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        // For other types (arrays, strings, etc.), copy the value as is
        newObj[key] = obj[key];
      }
    }
  
    return newObj;
  }
  
  // Example usage:
  const objTwo = {
    num: 1,
    test: ['some', 'array'],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66
      }
    }
  };
  
  const result = stringifyNumbers(objTwo);
  console.log(result);
  // Output:
  // {
  //   num: '1',
  //   test: ['some', 'array'],
  //   data: {
  //     val: '4',
  //     info: {
  //       isRight: true,
  //       random: '66'
  //     }
  //   }
  // }
  
  console.log(objTwo); // The original object remains unchanged

//   Write a function called collectStrings which 
//   accepts an object and returns an array of all 
//   the values in the object that have a typeof string

function collectStrings(obj: any) {
    let stringsArray: string[] = [];
  
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        // If the value is a string, add it to the array
        stringsArray.push(obj[key]);
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        // If the value is an object (but not an array), recursively collect strings from that object
        stringsArray = stringsArray.concat(collectStrings(obj[key]));
      }
    }
  
    return stringsArray;
  }
  
  // Example usage:
  const obj = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz"
            }
          }
        }
      }
    }
  };
  
  const resultTwo = collectStrings(obj);
  console.log(resultTwo); // Output: ['foo', 'bar', 'baz']
  