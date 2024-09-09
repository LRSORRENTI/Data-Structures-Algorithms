// Helper Method Recursion

// Helper functions are useful when we need to compile 
// some data like an array

// EX 

function collectOddValues(arr: number[]) {
    
    let result: number[] = []

    function helper(helperInput: any) {
        if(helperInput.length === 0) {
            return
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    } 
    
    helper(arr)
    console.log(result)
    return result
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

collectOddValues(myArr)
// [ 1, 3, 5, 7, 9, 11 ]