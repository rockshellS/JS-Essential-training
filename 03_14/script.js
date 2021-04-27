/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js"

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const book1 = new Book (
  "Dibs",
  25,
  "white",
  "no",
  "no",
  "no",
  "no"
);

const book2 = new Book (
  "Dumb People",
  3000,
  "yellow",
  "yep",
  "hell no",
  "yes",
  "please"
);

const book3 = new Book (
  "Classes",
  30000000,
  "purple",
  "yes",
  "no",
  "no",
  "no"
)

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log("book1:", book1)
console.log(book2.color)
console.log(book3.burn)
