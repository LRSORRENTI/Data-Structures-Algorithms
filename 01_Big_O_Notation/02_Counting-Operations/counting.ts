/* 

=======================
COUNTING OPERATIONS
=======================

If not time, then what? 

Rather than counting seconds, which 
are extremely variable, instead a better 
approach is to count how many 
simple operations a computer has to perform!

That will remain the same no matter which 
machine we're on

So if my algorithm has 7 operations to run, and 
my friend's algo has 5 operations, it doesn't matter 
what the specs of my machine are

*/

/*

What do we mean by simple operations? 

let's look at an example:

*/

function addUpTo(n: number): number{
    return n * (n + 1) / 2; 
    // inside here we have 1 multiplication,
    // 1 addtition, and one division
    // the numbers themselves aren't operations
    // the machine doesn't need to do much, 
    // the operations are what we want to count
    // so above we have 3

    // It doesn't matter what 'n' is, if n is 2, 
    // or n is 2 billion, there's only 3 calculations 

    // 3 operations regardless of the size of 
    // n, n can be small or massive, doesn't matter

}

// Now compare the above amount of operations to 
// our other solution:

function addUpToTwo(n: number): number{
    // this solution has a few more operations 
    // going on
    let total: number = 0;
    // above only happens once, one initial assignment
    // or operation before the loop begins
    
    // Below we start the loop with one 
    // assignment, i = 1

    // Below we also have the comparison 
    // operations going on: is i(1) <= 10? 
    // or is i(2) <= 10? So if we pass in 10, 
    // we're dealing with 10 camparison checks 
    for(let i: number = 1; i <= n; i++){
        // if n is 5, below we're adding 5 things 
        // below +=, that's five operations, if 
        // n is 20, there's 20, so inside here, it's 
        // n operations, and more because of the =
        // in +=, as n grows, there's more assignments
        // the i++ above is n additions and assignments,
        // because remember i++ is short for i+=1, so if 
        // n is 10 we have 10 assignment, if n is 1 million
        // we have a million assignments, it scales with n
        total += i;
    }
    // so yes, we've got quite a bit more operations 
    // to count inside of this version of our counting 
    // function, the number of total operations will 
    // grow in accordance to n
    return total;
}