/* //task # 1 - max of two numbers

let num1 = 3
let num2 = 5

maxOfTwoNumbers = () => num1 > num2 ? num1 : num2
console.log(maxOfTwoNumbers()) */


//


/* //task # 2 - max of three numbers

let prompt = require('prompt-sync')()

let num1 = prompt('Enter a number: ')
let num2 = prompt('Enter a second number: ')
let num3 = prompt('Enter a third number: ')

let threeNums = []
threeNums.push(num1, num2, num3)

highestNum = () => {
    let highNum = 0
    let highestNum = 0

    for (let i = 0; i < threeNums.length; i++) {
        if (threeNums[i] > highNum) {
            highNum = threeNums[i]
            highestNum = threeNums[i]
        }
    }
    return `The highest number of your three numbers (${threeNums.join(" ")}) is: ${highestNum}`
}

console.log(highestNum()) */


//


/* //task # 3 - check if a character is a vowel

let char = 'z'

isVowel = () => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ? `'${char}' is a vowel.` : `'${char}' is a consonant.`

console.log(isVowel()) */


/* //task # 4a - function that finds the sum of an array

let prompt = require('prompt-sync')()
let arr = prompt('Enter a list of numbers, divided by a space: ').split(' ')
let sumOfArray = 0;
console.log(arr)

sum = () => {
    for (var i = 0; i < arr.length; i++) {
        sumOfArray += Number(arr[i])
    }
    return sumOfArray
}
console.log(sum()) */

/* //task # 4b - function that multiplies the values in an array

let prompt = require('prompt-sync')()
let arr = prompt('Enter a list of numbers, divided by a space: ').split(' ')
let multiplesOfArray = 1;
console.log(arr)

multiples = () => {
    for (var i = 0; i < arr.length; i++) {
        multiplesOfArray *= Number(arr[i])
    }
    return multiplesOfArray
}
console.log(multiples()) */


//


//task # 5 - Write a function that returns the number of arguments passed to the function when called.

let prompt = (require('prompt-sync'))()
let string = prompt('Please type in the name of your favorite song: ').split(' ')

//solution #1 = use of arguments object
function paramCounter() {
    return arguments.length
}

//solution #2 = use of .length method
//paramCounter = () => string.length

//not entirely sure which solution is best practice. Included both.

console.log(`There are ${paramCounter(...string)} parameters being passed through.`)



/* //task # 6 - create function that reverses a string

var prompt = require('prompt-sync')()
var string = prompt('Please enter a word: ')

reverseString = () => stringReverse = string.split('').reverse().join("")

console.log(`the reverse of ${string} is ${reverseString()}`) */


//


/* //task # 7 - finds the longest word in a sentence

let prompt = require('prompt-sync')()
var string = prompt('Please enter a line from your favorite song: ').split(" ")

var longestWordLength = 0
var longestWord = ""

let longWord = () => {
    for (var i = 0; i < string.length; i++) {
        if (string[i].length > longestWordLength) {
            longestWordLength = string[i].length
            longestWord = string[i]
        }
    }
    string = string.join(" ")
    return `The longest word in '${string}' is ${longestWord} and is ${longestWord.length} letters long`;
}
console.log(longWord()) */


/* // task # 8 - finds all of the words in a sentence of a specific length, and prints it/them

let prompt = require('prompt-sync')()

var string = prompt('Please enter a line from your favorite song: ').split(" ")
var i = Number(prompt('Please enter a length amount: '))
var longestWords = []

let longWords = (i) => {
    for (var j = 0; j < string.length; j++) {
        if (string[j].length === i) {
            longestWords.push(string[j])
        }
    }
    string = string.join(" ")
    longestWords = longestWords.join(' ')
    return `All of the words in '${string}', that are ${i} letters long: '${longestWords}' `
}
console.log(longWords(i)) */

// if (when i sort through each character in a word, one of the characters is between num33(>33) and num64 (<64) ) variable = string[i].replace(the character symbol, "") || else 