// EXPLORING EXAMPLES

/* 
After we've been asked a coding question, we 
then take the time to really understand the 
problem in it's scope, and tied to that 
is coming up with concrete examples

Coming up with examples can help familiarize 
yourself with the problem better

This also comes to the idea of: 

`````````````
USER STORIES

`````````````
What are user stories? 

They are techniques to understand problems, 
given a user input, what is our output? 

After a user action, what's the goal, what should 
happen?


Also: 

```````````
UNIT TESTS

```````````

On a smaller scale we can write unit tests to 
help lay out how something should work



But back to exploring concrete examples,

- Start with simple examples! With an input and output

- Progress to more complex examples 

- Edge cases, explore examples with empty inputs 

- Examples with invalid inputs

*/

// Let's practice this now

// An interviewer asks you to: 

// Write a function that takes in a string, 
// and returns a count of every character in 
// that string 

/* 
Step 1:

Restate the problem: I need to have a function
maybe include a type check to verify the input, then 
impelement functionality to count every character 
of the passed in argument input string 

so charCount("aabbccc") // {a: 2, b: 2, c: 3}
   charCount("Hello") // {h: 1, e: 1, l: 2, o: 1}

But should we implement a way to return the characters
that are absent as well? 

charCount("aa") // {a: 2, b: 0, c: 0, ...z: 0 }

Then progress to more complex examples: 

charCount("My number is 5555555") // Do we want to 
account for spaces? What about special chars? Numbers?

Are we going to store all chars? Just letters? 
Uppercase and lowercase letters?

charCount("Hh")
{H: 1, h: 1}?

These questions are ways to understand the problem 
in a fundamental way, how complex or simple do 
we need this function or piece of code to be? 

Can we just store letters? Is that our goal? 

Or do we need to account for numbers, case sensitive
letters, and special characters? 



*/

/* 

Explore examples with empty inputs:

charCount() or charCount("") what happens then? 

Do we want to return an error message, or give 
empty or invalid inputs something to return? 

null? false? undefined? empty object?

What if someone passes in an object? 

Or null? 

What happens? 

In an interview, it may be helpful to speak with 
the interviewer about things like this, because in 
the real world of programming, calibrating for 
certain edge cases in more complex code, is crucial


*/

 function charCount(str: string){
    return str;
}
// charCount(22)
// charCount(null)

charCount('hello')
