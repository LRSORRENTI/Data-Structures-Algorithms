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
      // this conditional
       return false;
     }
     for(let i: number = 0; i < arr1.length; i++){
        let correctIndex: number = arr2.indexOf(arr1[i] ** 2)
          if(correctIndex === -1 ){
              return false;
        }
        arr2.splice(correctIndex, 1)
     }
     return true
     // Time complexity is O(n ^ 2)
}

