let prompt = require('prompt-sync')()


var firstNum = prompt("type in a number: ")
var secondNum = prompt("type in a bigger number: ")

// for (i = firstNum; i <= lastNum; i++) {
//     console.log(i)
// 

firstNum = Number(firstNum)
secondNum = Number(secondNum)
for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
}


