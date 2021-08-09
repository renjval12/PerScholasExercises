let prompt = require('prompt-sync')()

const num = parseInt(prompt("Enter a positive number: "));

let i = 0
let sum = 0
while (i <= num) {
    sum += i
    i++
}

console.log(sum)