/* 

==================
Introducing Big O
==================

In the past few lectures we've been talking 
about Big O, without actually naming it 

Big O is a way to formalize fuzzy counting 

It allows for easy discussion about the runtime 
of an algorithm as the input grows

In the previous lecture, where we used the mapping 
visualization, the Gauss formula was significantly 
better than the for loop solution, we saw the graph 
where the for loop grew expontentially larger with 
n, but Gauss formula remained relatively constant with 
small fluctuations

So we say that an algorithm is O(f(n)) if the 
number of simple operations the computer has to do
 is eventually less than constant times f(n), as 
 (n) increases 

- f(n) could be linear (f(n) = n)

- f(n) could be quadratic (f(n) = n^2)

- f(n) could be constant (f(n) - 1)

- f(n) could be something entirely different!


From the previous section remember we counted total 
operations: 

function addUpTo(n){
    return n * (n + 1) / 2; 
}

addUpTo only has 3 operations, so the line 
on the graph was roughly constant, not exactly but 
it was nothing like the for loop version of the same 
piece of code

But the trend is flat! It's always 3 operations no 
matter what, it has BIG O of 1 or O(1)

O(1) is the notation we'll commonly see, but 
even if it was O(n) or O(nlog(n)) this is 
telling us that even as n grows exponentially 
the change is not reflected in the run-time 

And if we had another function: 

function printAllPairs(n) {
    for(i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

This is O(n^2) this n squared, meaning as n grows, 
the time grows with it exponentially, and 
if you were to plug in a giant number, it would 
take quite a bit of time 


*/