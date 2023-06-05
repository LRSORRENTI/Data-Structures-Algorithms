/*
``````````````````
ANAGRAMS EXERCISE

``````````````````

To test our knowledge of the frequency counter
we'll try out a problem: 

Given two strings, write a function to 
determine if the second string is an anagram
of the first string argument 

An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such 
as: 

Cinema is an anagram with Iceman 

'cinema' and 'iceman' true

'cat' and 'tar' // false 

'cat' and 'tac' // True 

*/

import { type } from "os";

/*
Ok so psuedo-code wise how do we do this? 

Well first we need to declare a function called 
validAnagram, specifying two argument params that are 
strings: 

function validAnagram(str1: string, str2: string){

}

Can also specify the return type, we know we're 
checking for a boolean

function validAnagram(str1: string, str2: string): boolean{

}

Now what? Probably lowercase the inputs, also have 
a check to ensure the passed in args are indeed strings 
 and not any other data types


*/
// function validAnagram(str1: string, str2: string): boolean {
//     if (typeof str1 != 'string' || typeof str2 != 'string') {
//         console.log("please pass in a string data type");
//         return false;
//     }{
//     str1 = str1.toLowerCase(); 
//     str2 = str2.toLowerCase();
//     console.log(str1, str2);
//     }
//     return true;
// }

// validAnagram("yes", "no");

 /*
Ok so as of right now we have our type check, if 
// both args are indeed of type string we make it down 
to the lowercasing of the strings, probably a way to 
do both in one line but I'll try that later 

Now what? We have start implementing the actual 
anagram checking logic, how do I do this?


*/

function validAnagram(str1: string, str2: string): boolean {
    if (typeof str1 != 'string' || typeof str2 != 'string') {
        console.log("please pass in a string data type");
        return false;
    }{
    str1 = str1.toLowerCase(); 
    str2 = str2.toLowerCase();
    console.log(str1, str2);
    }
    return true;
}
validAnagram("YES", "NO");

