let prompt = require('prompt-sync')()

var stringEntry = prompt("type in a word: ")
//created a variable to hold the string a user enters when they're given the above prompt

var charEntry = prompt("type in a letter: ")
//created a variable to hold the character/letter a user enters when they're given the above prompt

var positions = []
//created a variable to hold each position, the character/letter was found

var counter = 0;
//created a variable to hold the number of times the character/letter was found in the user-provided string

var found;

for (let i = 0; i < stringEntry.length; i++) {
    if (stringEntry.charAt(i) === charEntry) {
        positions.push(i)
        counter++
        found = true
    }
}

if (!found) {
    console.log(`the letter ${charEntry} is not found in this string`)
}
else {
    console.log(`the letter ${charEntry} was found in position ${positions}`)
    console.log(`the letter ${charEntry} was found ${counter} times`)
}
r

