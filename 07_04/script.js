/**
 * Challenge: Build and modify an array
 */

// * - Build an array with 8 items÷\
let table = ["computer", "monitor", "pens", "whiteout", "cup", "notebooks", "lamp", "glasses", "glasses", "lotion"
]


// * - Remove the last item
console.log(table.pop())



// * - Add the last item as the first item on the array 
table.unshift(table.pop())
console.log(table)




// * - Sort the items by alphabetical order
console.log(table.sort())


// * - Use the find() method to find a specific item in the array
const findItem = table.find(item => item === "pens")
console.log("Found item:",findItem)

// * - Remove the item you found using the find method from the array.
let remove = "glasses"
table.splice(table.indexOf(remove), 4, "DOG")
console.log(`array with "${remove}" removed:`, table)
