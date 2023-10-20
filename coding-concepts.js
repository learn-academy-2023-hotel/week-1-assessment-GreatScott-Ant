// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: Adds "indigo" to array.
// b) Verify and explain: The actual return was "5" the index of the new array created.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10, the number of spaces (length of array)
// b) Verify and explain: Above answer was correct. .length = length of string, (I called it array above, VOCAB!)

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: the letter "o", in the 4th index spot
// b) Verify and explain: Above answer was correct. 
// Command calls for greeting "Hello World!" but for the item in the 4th index location

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Javascipt
// b) Verify and explain: Ruby, each item in quotes is counted as 1, but the count begins at 0 (SMH)

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain: I received an error that stated "toUpperCase" is not a function. 
// I believe this is because "weekendDays" is an array and not a string.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Object
// b) Verify and explain: number. I thought that it being an array would make the answer object, but with the quotes maybe it
// changed the value or type??
