// Implement a function that will accept a sorted 
// array and counts the unique vals in that array

// There can be negative nums, but it will always 
// be sorted 

// countUniq([1, 1, 1, 2]) // 2 

// countUniq([2, 2, 3, 4, 5, 5, 6, 7]) // 5

export const countUniq = (arr) => {
    // first declare variable i set to 0
    if(arr.length === 0){
        return 0
    };
     let i = 0;
     // then start a loop, 
     for(let j = 1; j < arr.length; j++){
        // j is going to be our pointer 
        // it will go through the array
       if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j];
       }; 
       console.log(i, j);
     };
     return i + 1;
};

countUniq([2, 2, 3, 4, 5, 5, 6, 7]);

// 0 1
// 1 2
// 2 3
// 3 4
// 3 5
// 4 6
// 5 7

// This solution is O(n) since we're only looping once, 
