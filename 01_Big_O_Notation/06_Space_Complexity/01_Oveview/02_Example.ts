// The below function will sum all the 
// values in a given array

// But remember, SPACE not TIME is 
// what we're concerned with now

// So what below take up space? 

function sum(arr): number{
    let total: number = 0;
    // No matter what the array length is
    // we have one variable of total
    for(let i: number = 0; i < arr.length; i++){
        // we also have a declaration inside the for 
        // loop 'let i' 
        total += arr[i];
    }
    return total
}

// And that's all we have for space, we will be 
// going back into the total variable with 
// the '+=' but that doesn't matter, total is total, 
// there isn't a totalTwo variable, if there was we 
// would need to include that in our count of space 

// This means we have constant space! O(1) space!