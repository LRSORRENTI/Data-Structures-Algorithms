// Refactor from: 

/* 
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

TO:

*/


const myArray = [-4, -3, -2, -1, 0, 1, 2, 5, 10]

export function sumZero(arr){
    let left = 0;
    let right = arr.length - 1; 
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else{
            left++;
        }

    }
}

console.log(sumZero(myArray))

// time complexity O(n)
// space complexity O(1)