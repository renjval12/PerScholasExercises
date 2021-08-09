// let prompt = require('prompt-sync')()

// const num = prompt("type in a positive number: ")

// let array = []
// for (let i = 0; i <= num; i++) {
//     array.push(i)
// }
// console.log(array)
// console.log("------------------")

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

//slice() method

// let array = ['Bob', 'George', 'Sally', 'Cindy']
// let array2 = array.slice(0,2)

// console.log(array2)

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (i = 0; i < increaseByTwo.length; i++) {
    increaseByTwo[i] += 2
}

console.log(increaseByTwo)
// -> should print [3, 4, 5, 6, 7];

const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [`My name is ${firstNames[0]} ${lastNames[0]} and I am from ${places[0]}`, `My name is ${firstNames[1]} ${lastNames[1]} and I am from ${places[1]}`, `My name is ${firstNames[2]} ${lastNames[2]} and I am from ${places[2]}`]

for (let i = 0; i < bios.length; i++) {
    console.log(bios[i])
}