// First recursive function

function countDown(num: number) {
    // below is our base case, once the countdown 
    // reaches zero exit the recursive call
    if (num <= 0) {
        console.log("All done!")
        return
    }
    console.log(num)
    // Below is the next step of our recursive function,
    // since num is not zero, use -- to minus one from 
    // num
    num--
    // below we call countDown from within countDown
    // this is the hallmark of a recursive function, it's 
    // calling itself
    countDown(num)
}

countDown(5)

// We could do this iteratively as well, non recursively:

function iterativelyNotRecursive(num: number) {
    for(let i = num; i > 0; i--){
        console.log(i)
    }
    console.log("all done!")
}

iterativelyNotRecursive(10)