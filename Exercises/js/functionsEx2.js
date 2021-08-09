// // string is a palindrome

var prompt = require('prompt-sync')()
var string = prompt('Please enter a word: ')
var stringReverse = string.split('').reverse().join("")

function palindromeTest() {
    if (string === stringReverse) {
        return string + ' is a palindrome!'
    }

    if (string !== stringReverse) {
        return string + ' is NOT a palindrome.'
    }
}

console.log(palindromeTest())