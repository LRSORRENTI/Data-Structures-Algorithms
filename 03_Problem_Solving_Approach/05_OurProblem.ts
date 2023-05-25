// Write a function that takes in a string and 
// returns a count of each character in the strinf


//charCount('aaa'){
     /*
        {
            a: 4
        }
    */
   // }


//charCount("hello"){
    /*
    
    {
        h: 1, 
        e: 1, 
        l: 2, 
        o: 1
    }
    
    */
//}

//charCount("Your PIN number is 1234!"){
    /*
     {
        1: 1, 
        2: 1,
        3: 1,
        4: 1,
        b: 1, 
        e: 1,
        i: 1,
        m: 1,
        n: 2,
        o: 1,
        p: 1,
        r: 2,
        s: 1, 
        u: 2, 
        y: 1
     }  


      
    */
//}

//function charCount(str){
    // simplest way to start is with: 

    // do something!

    // But our interviewer is asking us to keep track
    // of all alpha-numeric chars in an inputted string, 
    // so uppercase 'P' and lowerCase 'p' both count 
    // towards 'p: 2' 
//}

// So how would be tackle this problem? 

// What do we need to do? 

// Well we know we need to do something at least 
// once for every character in the input string

// We also need to keep our counts for each character, 
// an object would suit us well here 

// So we know we need to identify and count every character
// then return an object of those char counts

// but the bulk of the logic will come from how 
// we implement the loop to do the counting 

// function charCount(str){
    // start simple: 

    //maybe do a check 
    // to make sure user didn't input wrong 
    // data type, strings only please

   // then: 

    // make object to return at the end: 

    // Then: 

    // loop over str

    // Then: 

    // return object at end here
// }

// Now our comment skeleton of steps is complete, 
// it's very basic yes, but it's a good starting 
// point


// Now let's go over it again and really think about 
// how to implement the logic

 function charCount(str){
    // start simple: 

    //maybe do a check 
    // to make sure user didn't input wrong 
    // data type, strings only please

   // then: 

    // make object to return at the end: 

    // Then: 

    // loop over str, and we know we'll need to 
    // look at each character, we also know 
    // we need to lowercase all chars

    // But also we need to start thinking about, 
    // ok, we already have a:1, so when we 
    // come across another 'a' or 'A', the 
    // count in our object for 'a' increments from 
    // a: 1, to a: 2, and will continue to increment 
    // each time our loop finds an 'a' 

    // if character is not yet in our object, 
    // create new key value pair and set 
    // key to the new char value, and value to 1

    // But we have a problem, remember, we don't want 
    // any special chars like '?' or '!', or ' ' 
    // spaces between words, so how do we implememt 
    // the logic to ignore those? 
   
     // if char is num/letter and is a key in obj, add one to count 
    
     // if char is num/letter and is NOT yet in obj, add it and set value to one 
     
     // else if char is something else besides num/letter (space, 
     // period, question mark etc.. ) don't do anything



    // Then: 

    // return object at end here
 }

 // And this isn't even full pseudo-code, but even 
 // for simple problems like this one, just utilizing 
 // comments to articulate your thought process appraach 
 // to solving the problem can help you, and anyone 
 // on your team or group, to brainstorm solutions to 
 // a given problem!

 // It's about the process itself, often in interviews, 
 // the interview really wants to analyze the approach 
 // you take when you are tasked with a problem, 
 // even if you don't finish or even come to the wrong 
 // solution at the end, being open and transparent 
 // in the comments / pseudo-code helps demonstrate 
 // your process for handling problems, and showcases 
 // the steps you take before even writing code at all 