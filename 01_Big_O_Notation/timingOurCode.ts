// We want to create a function that will 
// calculate the sum of all numbers from 1 
// up to, and including some number n

 export function addUpTwo(num: number): number{
    let total: number = 0;
    for(let i = 0; i <= num; i++){
        total += i;
    }
    console.log(total)
    return total;
}
addUpTwo(5)
addUpTwo(100)

// So that's one solution, another solution is: 

export function addUpTo(n: number): number{
    console.log(n * (n + 1) / 2)
    return n * (n + 1) / 2
}

addUpTo(5)
addUpTo(100)