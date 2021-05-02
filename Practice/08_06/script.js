/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
function addNumbers(a,b) {
    // const number = document.createElement('number')
    // number.innerHTML = addNumbers()
    return a + b 
}
addNumbers(1,2)
console.log(addNumbers(5,1))

const letsAddMoreNumbers = function(a,b,c)  {
 return a + b + c 
}
console.log(letsAddMoreNumbers(2,3,4))

const doThisOneMoreTime = (a,b,c,d) => {
    return a + b + c + d 
}
console.log(doThisOneMoreTime(3,4,5,6,))