const myArray = [-4, -3, -2, -1, 0, 1, 2, 5]



export function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero(myArray)) // [-2, 2]

// The time complexity of the above function is 
// O(n ^ 2) so quadratic, not good
// space complexity is O(1)