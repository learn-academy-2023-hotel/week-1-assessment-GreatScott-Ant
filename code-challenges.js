// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"
// if (fruit1.length > fruit2.length){ //Create a code that states "if fruit1 is greater than fruit2"
//     console.log(fruit1)             //Request the output to be fruit1 if the statement above is true
//         } else {                    //If it's not true, then output the latter option fruit2
//             console.log(fruit2)
        // }
    
// I'm still having issues grasping the format of the codes, and understanding the curly bracket placement. Thought this questions was on the easiser side, it took me a minute to piece the lines together without running into errors. (I also forgot .lenght off of fruit2 on line 16 orignally.)

// Set two:
const fruit1 = "cherry"
const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code: 

//I want a code that says if fruit1 has more characters than fruit2, then the response should be fruit1 (using if as my Conditional statement)
 
 if(fruit1.length > fruit2.length){     //Originally forgot to add ".length" (oversight, but major mistake). 
    console.log(fruit1)
 } else {                               //Still struggling with curly bracket usage
    console.log(fruit2)                 //Was able to recreate formula from above but it "looks" different
 }
 



// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code: //Find out what I action can I use to "add" the two arrays together. Don't have to change them since arrays can contain any type of data

var newRun = padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length //Originally had "const", tried removing
console.log(newRun)                                                             // removing const did the trick

//Code doesn't look as clean as I would like, would love to work on formatting for neatness so it's easy for fellow programmers to understand if shared.


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

// Pseudo code: I remember talking about this in class. Need to become stronger at ability to look at set of code and know if it's array, string etc. and what rules apply to them. I'll first need to make this string an array:
var newCur = currentCohort.split("").reverse().join("")
console.log(newCur)

//My original idea was to break down each action step by step, but as I began the code, I felt I could put each action in one line as long as I did it in correct order (split to make string array, reverse to the new array, then join to make reversed array a string). Gave it a run and it happenend to work out this time!

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code: 
// First thought was use Boolean to say if remainder doesn't equal 0 then return that number. Sounds like a conditional statement, so I'm going with "if". I know I'll need index in there somewhere as well. 

//After looking over notes I saw "for/let" and thought it was better to use.

    // for (i = 0; i < stockExchange.length; i++){      //Remembered I needed.length; still unsure on meaning of "i++""
    // if (stockExchange)[i] % 2 !== 0                  //Statement that says if remainder of index divided by 2 is equal to 0
    //     console.log(stockExchange[i])                 //Return only results from array that don't have a remainder of 0
    // }

    // Output was entire array. Couldn't figure out why so I had a fellow Hotel cohort member look at code; found error on line 78:
     // if (stockExchange)[i] % 2 !== 0 
     // (parenthesis around stockExchange instead of closing after 0.)

    for( i = 0; i < stockExchange.length; i++){
        if(stockExchange[i] % 2 !== 0) 
            console.log(stockExchange[i])
        }