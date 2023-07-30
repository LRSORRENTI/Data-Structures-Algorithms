// BINARY SEARCH PSEUDO-CODE

// Function that accepts a sorted array, 
// it must be sorted, this function also 
// accepts a value

// Create a left pointer, at the start of the 
// array, always at index[0], 
//and a right pointer at the end of 
// the array, and a middle pointer, about roughly 
// halfway between the starting and ending pointer 

// While loop, while the left pointer comes 
// before the right pointer: 

// Check one, did we find the element already? 
// While we haven't found the element keep looping

// check two, only loop while the left comes 
// before the right, then also pick the middle

// if left pointer is 0 and right pointer is 
// 12, then 6 is the middle, then loop, 
// is element equal to 6? If true return

// If value is too small, move left pointer up

// If value is too large move right pointer down

// And if the value is never found, return -1 

function binarySearch(sortedArr: number[], element: number){
    let start = 0;

    // start is our left pointer, index of 0

    let end = sortedArr.length -1;
    // end is our right pointer, which is the length - 1,
    // b/c without the - 1, we'd be out of bounds, outside 
    // the end, arr.length - 1 is the actual last 
    // array value  

    let middlePointer = Math.floor((start + end) / 2);

    // the middle pointer will be the starting index, 
    // pus the length of the array, which can be 
    // any length, divided by 2, then we floor that 
    // number so we're not looking a floating point number 
    
    // There's never going to be an arrray index[3.5] 
    // indexes of an array are always whole numbers

    // middlepointer will grab the middle of
    // the array by adding 0 + the length 
    // of the array, and dividing by twi, it will 
    // also round  down if we get a decimal number
        // console.log(start, middlePointer, end)
    
        // [2, 5, 6, 9, 13, 15, 28, 30]
  
        // So right now, for this array, our 
        // start [0] is 2

        // Our middlepointer (math.floor start + end / 2 )
        // is floored to array[3] which is 9, middlePointer is 9


        // So what we want to do is repeat this process,
        // where we loop, and select a middle, but first 
        // we need to add that conditional check, on the 
        // off chance we got lucky and the middle pointer 
        // just so happened to land on our desiredValue,
        // unlikely but the check must always be made for 
        // that condition 

        while(sortedArr[middlePointer] !== element){
            console.log(start, middlePointer, end)

            // so if we're in here we can assumne 
            // the middle pointer is not yet at the 
            // desired element, we haven't found 
            // what we're searching for yet
            
            // If we're looking for the number 5
            // we need to determine, okay is 9 too big? 
            // Or is 9 too small? 

            // If too small we only need to keep searching 
            // from S - E pointers [2, 5, 6] since 
            // we now know to move the end pointer to 6,
            
            // We move end pointer to 6, not 9, since 
            // if the desired value was 9, we would've 
            // already returned 

            // and math.floor to find the middle again, 
            // okay now is 

        // binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)
            //           S         M              E


            // so we want 15, 15 is greater than the 
            // middle pointer, so we now need to move 
            // the start pointer to 13, because we now 
            // know for sure it's not 2, 5, 6, or 9
            // so we can skip checking those 

            if(element < sortedArr[middlePointer]){
                // so if our element is less than where 
                // the pointer is at, we want to move 
                // the end pointer where the middle 
                // pointer just was minus 1

                // This is where the magic happens, if 
                // the passed in element above is 
                // less than sortedArr of middlePointer,
                // we move the end pointer to a new 
                // location, where middlePointer just was 
                // but minus one  


                end = middlePointer - 1;

            } else {

                // Else means that what we're looking for 
                // is greater than the middle pointer
                
                // That means we can now move the starting 
                // pointer up to where middlePointer just 
                // was but plus one, since that middlePointer
                // wasn't the desired value

                start = middlePointer + 1;

            }
               
            // So at this point the End is still the same 
                // but if we're looking for 15 in the array below, 
                // that start pointer moves up one to 13, but 
                //  we need to recalculate / average the middle:
               
                middlePointer = Math.floor((start + end) / 2);
                
                // this will give us Math.floor(4 , 7)
                // since the start pointer is now at 13 aka index 4,
                
               
        }
       
        console.log(start, middlePointer, end)
        return middlePointer;
        // we'll loop while the middle pointer is not 
        // equal to the element we want
}

// binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)
//            S         M              E


binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)
//            S        M                E  DV 
// first loop moves since 28 is > 9

            // [ 13, 15, 28, 30]
              // S   M        E 
// Next loop runs, since we still didn't find 28,
// but the pointers move again: 

            // [ 28, 30]
             //  S   M   E 
// And now our small pointer has found 
// the desired value, so the loop breaks 
// binary searched for the value 28, the middlepointer 
// also rounds down so technical;y both starting pointer 
// and middlepointer succeed


// But we've got a problem, we don't have any conditional
// checks if the desiredValue is never found

// If we did binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 50)

// We'd be in trouble, it would loop over and over, 
// we need to handle the case that the items just 
// doesn't exist in the array, we'd be out of bounds, 
// our pointers would now be looping forever checking 
// to see if undefined === desiredValue which we don't want 

// function binarySearchOne(sortedArr: number[], element: number){

//     let start: number = 0;

//     let end: number = sortedArr.length -1;

//     let middlePointer: number = Math.floor((start + end) / 2);

//     while(sortedArr[middlePointer] !== element){
//         if(element < sortedArr[middlePointer]){
//              end = middlePointer - 1;
//        } else {
//             start = middlePointer + 1;
//              }
//         middlePointer = Math.floor((start + end) / 2);                
//           }
//        console.log(start, middlePointer, end)
//     return middlePointer;
// }



// binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)
