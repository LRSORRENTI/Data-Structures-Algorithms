// Writing Factorial iteratively solution

function factorial(num: number) {
    let total: number = 1
    for(let i = num; i > 1; i--){
        total *= i
    }
    console.log(`Iterative Solution: ${total}`)
    return total
}

factorial(7)

// Factorial recursive solution

function recursiveFactorial(n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n * recursiveFactorial(n - 1);
    }
}

const factorialOf7 = recursiveFactorial(7);
console.log(`Recursive solution ${factorialOf7}`); 


recursiveFactorial(7)