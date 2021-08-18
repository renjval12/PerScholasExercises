let char = 1


if (typeof char == 'string') {
    if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) {
        console.log(char + " is a letter")
    }
}
else if (typeof char === 'number') {
    console.log(char + " is a number")
}

else {
    console.log('invalid entry')
}
