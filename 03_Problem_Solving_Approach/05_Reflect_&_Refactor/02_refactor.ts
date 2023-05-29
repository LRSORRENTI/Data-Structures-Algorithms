// Let's go back to our last problem 
// and refactor

export function charCount(string){
      let obj = {};
      for(let i = 0; i < string.length; i++){
         let char = string[i].toLowerCase();
         // below we add an expression to 
         // test if a character is alpha-numeric
         if(/[a-z0-9]/.test(char)){
            // REGEX weeds out anything not a-z, 0-9, 
            // and remember we lowercased it first above 
            // so its /[a-z]/ otherwise we'd need to expoand 
            // the regex to
            // if(/[a-zA-Z0-9]/.test(char))
            if(obj[char] > 0){
                // first we check if the value 
                // is already in the object, if it's 
                // greater then 0 that means there's 
                // already at least one
                obj[char]++
            } else {
                // otherwise, if it's not yet in the 
                // array, initialize it to one
                obj[char] = 1;
            }
         }
      }
      return obj;
}