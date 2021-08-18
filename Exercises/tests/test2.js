function randomColor() {
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    return `rgb(${a}, ${b}, ${c})`
}


console.log(randomColor())