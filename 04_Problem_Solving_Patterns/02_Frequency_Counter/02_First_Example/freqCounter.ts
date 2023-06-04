/* 

- Write a function called same(),

- Which accepts two array arguments

- The function should return true if every
  This func will return true if every value
  in the array has it's corresponding value squared 
  in the second array. 

  The frequency of values must be the same



*/

/*
same ([1, 2, 3], [4, 1, 9]) // true b/c 1 squared is 1, 
                            // 2 sqaured is 4, 3 squared is 9
                            
same([1, 2, 3], [1, 9]) // false b/c it's missing 4
same([1, 2, 1], [4, 4, 1]) // false (must be same freq, if first 
// array was [2, 2, 1] instead of [1, 2, 1] it would be true)



*/

// A NOT IDEAL SOLUTION: 

function notIdealSame(arr1: Array<number>, arr2: Array<number>): boolean{
  // WE have a function that takes two arrays, and will return 
  // a boolean indicating if arr2 contains the squared version of 
  // each element in arr1
     if(arr1.length !== arr2.length){
      // this conditional checks the lengths of 
      // arr1, and arr2, if they are not equal return false
      console.log("please pass in two arrays of equal length")
       return false;
     }
     for(let i: number = 0; i < arr1.length; i++){
      // we have a loop that iterates over every element in 
      // arr1
        let correctIndex: number = arr2.indexOf(arr1[i] ** 2)
        // correct index is assigned the index of the 
        // squared value of the current element in arr1 within 
        // arr2, the ** will calc the square of the current element
          if(correctIndex === -1 ){
            // this check will verify if correctIndex is -1, 
            // which means if the squared value of the current 
            // looped over element was not found, arr2 doesn't contain 
            // that squared version of the element in arr1 so return false

              return false;
        }
        // if we make it down here, that means that the squared value 
        // from arr1 is inside arr2, so we splice that value, ensuring 
        // we don't count duplicated
        arr2.splice(correctIndex, 1)
     }
     // and if we make it all the way down here, it means 
     // every element from arr1 has a squared version of that same 
     // element present in arr2
     return true
     // Time complexity is O(n ^ 2)
}
/* 
The time complexity of this code is indeed O(n^2),
 where n is the length of arr1 (and also arr2). 
 
 This is because the indexOf method called within
  the loop has a time complexity of O(n), and it 
  is executed for each element in arr1. Additionally, 
  the splice method within the loop also has a 
  time complexity of O(n) since it may need to 
  shift elements after removing an element. 
  
  As a result, the overall time complexity is O(n^2).



*/

console.log(notIdealSame([1,2,3], [9, 1, 4]))
console.log(notIdealSame([1, 2], [1, 4, 4]))
console.log(notIdealSame([2, 9, 5, 3], [81, 25, 9, 4]))
console.log(notIdealSame([2, 3, 5], [1, 7, 9]))
// $ ts-node freqCounter.ts 
// true
// false
