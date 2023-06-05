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

// function validAnagram(str1: string, str2: string): boolean {
//     // if (typeof str1 != 'string' || typeof str2 != 'string') {
//     //     console.log("please pass in a string data type");
//     //     return false;
//     // }
//     if((typeof str1 || typeof str2) !== 'string'){
//         console.log("please pass in string data types only")
//         return false
//     }
//     {
//     str1 = str1.toLowerCase(); 
//     str2 = str2.toLowerCase();
//     console.log(str1, str2);
//     }
//     return true;
// }
// validAnagram("YES", "NO");

function validAnagram(str1: string, str2: string): boolean {
    let checkingObj = {};
    if (typeof str1 != 'string' || typeof str2 != 'string') {
        console.log("please pass in a string data type");
        return false;
    }{
    str1 = str1.toLowerCase(); 
    str2 = str2.toLowerCase();
    console.log(str1, str2);
    }
    {
        const charMap1: Record<string, number> = {};
        const charMap2: Record<string, number> = {};
    /*
      In TypeScript, Record<K, V> is a utility
       type that represents an object type with
        keys of type K and values of type V. 
        
        It allows you to define a dictionary-like
         structure where the keys are of one type
          and the values are of another type. 
          In this case, string is the key type,
           and number is the value type.
    */
        for (const char of str1) {
            charMap1[char] = (charMap1[char] || 0) + 1;
        }
    /*
This loop iterates over each character (char) 
in str1. It then updates the charMap1 object 
by incrementing the count of the corresponding 
character. If the character does not exist in
 charMap1, it initializes it with a count of 
 0 and then increments it by 1. This loop 
 effectively builds the character frequency
  map for str1.

Similarly, the next loop does the same for str2:



    */
        for (const char of str2) {
            charMap2[char] = (charMap2[char] || 0) + 1;
        }
    
/*

After building the character frequency
 maps for both strings, the code 
 proceeds to compare the maps:

*/

        // Compare character frequency maps
        for (const char in charMap1) {
            if (charMap1[char] !== charMap2[char]) {
                return false;
            }
        }

        /*

This loop iterates over each character (char)
 in the charMap1 object. It compares the
  frequency of that character in charMap1
   with the frequency of the same character
    in charMap2. If any character has a 
    different frequency between the two maps, 
    it means the strings are not anagrams, 
    and the function returns false.

If the loop completes without finding any 
discrepancies in character frequencies, 
the function returns true, indicating 
that the strings are valid anagrams.

So, in summary, these for...of loops
 are used to iterate over the characters 
 of the input strings and build the character 
 frequency maps, which are then compared to
  determine if the strings are anagrams.


        */
    }
    return true;
}

validAnagram("YES", "NO");
validAnagram("ICEMAN", "CINEMA")// Cinema: good song by benny benassi


let ice = "Iceman"
let cin = "Cinema"

if (validAnagram(ice, cin)) {
    console.log(`${ice} and ${cin} are anagrams.`);
} else {
    console.log(`${ice} and ${cin} are not anagrams.`);
}

/* ======
   BIG O 
   ======

 The Big O complexity of the function depends on 
 the operations

The cleaning step, where whitespace is 
removed and the strings are converted to 
lowercase, has a complexity of O(n),
 where n is the length of the strings. 
 This step iterates over each character 
 of the strings once.

Building the character frequency maps 
requires iterating over each character
 in both strings, resulting in a complexity of 
 O(n), where n is the length of the longer string.

Comparing the character frequency maps 
involves iterating over the characters in
 one of the maps, which has a complexity 
 of O(n), where n is the number of unique 
 characters in the maps.

Therefore, the overall complexity of
 the areAnagrams function is O(n), 
 where n is the length of the longer 
 input string. It is important to note 
 that the function does not rely on 
 nested loops or recursive calls, 
 so the complexity remains linear.

In terms of space complexity, the 
function uses additional space to 
store the character frequency maps. 
The space required is proportional 
to the number of unique characters 
in the input strings, which can be 
at most O(n), where n is the length
 of the longer string.


   */

 // $ ts-node 01_firstAttemp.ts 
// yes no
// iceman cinema
// iceman cinema
// Iceman and Cinema are anagrams.