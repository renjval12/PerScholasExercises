let prompt = require('prompt-sync')()


var stringEntry = prompt("type in a word: ")

stringEntry= stringEntry.toLowerCase()
//created a variable to hold the string a user enters when they're given the above prompt 

var vowels = 'aeiou'
//so the for loop that tests if a letter in the array is found in the string, is functional

var vowelsCounter = 0
var consonantsCounter = 0
//to count how many vowels and consonants there are

//flag variable

for (let i = 0; i < stringEntry.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (stringEntry[i].includes(vowels[j])) {
            vowelsCounter++
            break
        }
        else {
            consonantsCounter++
        }
    }
}

console.log(`number of vowels in ${stringEntry} ${vowelsCounter}`)
console.log(`number of consonants in ${stringEntry} ${consonantsCounter}`)
