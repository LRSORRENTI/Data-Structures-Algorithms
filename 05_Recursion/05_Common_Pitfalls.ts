// List of common pitfalls

// #1. Not specifying base case:

function factorialOne(num: number) {
    return num * factorialOne(num - 1)
}

// The above factorial will go on forever and cause a 
// STACK OVERFLOW, we always need to include a 
// base case

// #2. Forgetting to return a value or specifying 
// the wrong return value

