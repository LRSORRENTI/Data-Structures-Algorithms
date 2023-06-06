// COLT'S SOLUTION

function anagramCheck(first, second){
    if(first.length !== second.length){
        return false;
    }
    const lookup = {};
    console.log(lookup)

    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment, else set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        
    }
    console.log(lookup)
    for(let i = 0; i < second.length; i++){
        let letter = second[i];
      
        // letter not found, or letter is zero then 
        // it's not an anagram
        if(!lookup[letter]){
            
            return false;
        } else{
           
            lookup[letter] -= 1;
           
        }
    }

    return true 
}

console.log(anagramCheck('CAT', 'TAC'))

console.log(anagramCheck('CAT', 'TAZ'))

console.log(anagramCheck('ICEMAN', 'CINEMA'))

/*

node 02_ColtVersion.js 
console.log(anagramCheck('CAT', 'TAC'))
// true

console.log(anagramCheck('CAT', 'TAZ'))
// false

console.log(anagramCheck('ICEMAN', 'CINEMA'))
// true



*/