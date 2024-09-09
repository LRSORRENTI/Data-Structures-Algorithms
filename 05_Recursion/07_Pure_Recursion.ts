// Pure Recursion (No helper function)

// When using pure recursion utilize methods like 
// spread operator, slice, concat so you don't mutate 
// them and instead make copies of them 

// Remember strings are immutable so you'll use 
// methods like slice, substr, or substring to make 
// copies of strings

function collectOddVals(arr: number[]) {
    let newArr: number[] = []

    if(arr.length === 0) {
        return newArr
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddVals(arr.slice(1)));
    console.log(newArr)
    return newArr
}

let myArrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

collectOddVals(myArrTwo)
// 1, 3, 5, 7, 9, 11 ]