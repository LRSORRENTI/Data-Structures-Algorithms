let states: string[] =  ['Alabama','Alaska',
'American Samoa','Arizona','Arkansas','California',
'Colorado','Connecticut','Delaware',
'District of Columbia',
'Federated States of Micronesia','Florida',
'Georgia','Guam','Hawaii','Idaho','Illinois',
'Indiana','Iowa','Kansas','Kentucky','Louisiana',
'Maine','Marshall Islands','Maryland',
'Massachusetts','Michigan','Minnesota',
'Mississippi','Missouri','Montana','Nebraska',
'Nevada','New Hampshire','New Jersey','New Mexico',
'New York','North Carolina','North Dakota',
'Northern Mariana Islands','Ohio','Oklahoma',
'Oregon','Palau','Pennsylvania','Puerto Rico',
'Rhode Island','South Carolina','South Dakota',
'Tennessee','Texas','Utah','Vermont',
'Virgin Island','Virginia','Washington',
'West Virginia','Wisconsin','Wyoming']
// console.log(states)

// The main idea behind binary search is divide and
// conquer, let's say we want to search for 'Wisconsin'

// We can check in the middle, maybe at michigan,
// is michigan or 'm'

// Does 'm' come after 'W'? No so we can now eliminate 
// the need to search from a - m,

// Then we can do it again, now we only care 
// about 

 let halved: string[] = [ 'Michigan','Minnesota',
'Mississippi','Missouri','Montana','Nebraska',
'Nevada','New Hampshire','New Jersey','New Mexico',
'New York','North Carolina','North Dakota',
'Northern Mariana Islands','Ohio','Oklahoma',
'Oregon','Palau','Pennsylvania','Puerto Rico',
'Rhode Island','South Carolina','South Dakota',
'Tennessee','Texas','Utah','Vermont',
'Virgin Island','Virginia','Washington',
'West Virginia','Wisconsin','Wyoming']
// console.log(states)

// well it's less than, so we just eliminated 
// the need to check every state that comes before 
// michigan

// now we can check again from michigan to wisconson, 
// south dakota, is south dakota

let halvedAgain: string[] = ['South Dakota',
'Tennessee','Texas','Utah','Vermont',
'Virgin Island','Virginia','Washington',
'West Virginia','Wisconsin','Wyoming']

// And we keep halving until we find 'Wisconsin'

// So with binary search maybe it takes us 5 - 10 
// steps to find 'Wisconsin', if we used linear 
// search which looks one by one starting at the 
// beginning, we can see how much slower that is

// Imagine the array is not this small, let's 
// pretend it's thousands, tens of thousands 
// of values in length, the time it will 
// take for linear search to find a given element
// depends entirely on input size, if the array 
// is 5 items long, it doesn't matter, but as 
// the input size array grows, linear search is 
// not ideal
