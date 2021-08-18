// let num1 = 1
// let num2 = 2
// let sum = num1 + num2
// console.log("num1: " + num1)
// console.log("num2: " + num2)
// console.log("sum: " + sum)

let nameStr = 'Renee John Jane Jill Jack'
nameStr.split().join(' ')

function changeMe(i) {
    i.innerHTML = 'You Changed Me!'
}

function sum(i) {
    let num1 = Number(i.innerHTML.split('+')[0])
    let num2 = Number(i.innerHTML.split('+')[1])
    let sum = num1 + num2
    i.innerHTML += ' = ' + sum
}

function randomColor() {
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    return `rgb(${a}, ${b}, ${c})`
}

function randomBackgroundColor(i) {
    i.style.color = randomColor()
}