// var name = "john "

// console.log(`the length of ${name} is ${name.length}`)
// console.log(`the letter at position 1 is ${name.charAt(1)}`)
// console.log(`the index of h: ${name.indexOf("h")}`)
// console.log(`here's ${name}* 10: ${name.repeat(10)}`)


let txt1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log("txt1 variable = " + txt1)
console.log()

// .length()
console.log("length of txt1 variable: " + txt1.length)

// .charAt()
console.log("character at position 7: " + txt1.charAt(6))

// .indexOf()
console.log("index of 'O' in txt1 variable: " + txt1.indexOf('O'))

// .repeat()
console.log("repeat of 'S' x 10: " + txt1[18].repeat(10));

// .toLowerCase()
let txt2 = txt1.toLowerCase();
console.log("lower case of txt1 variable: " + txt2);

// .toUpperCase()
console.log()
console.log("txt2 variable = " + txt2)
console.log()

console.log("upper case of txt2 variable: " + txt2.toUpperCase());

// .concat()
let both = txt1.concat(txt2)
console.log("upper case (txt1) and lower case alphabet (txt2): " + " / " + both);

// .slice()
let pieceOfTheAlphabet = both.slice(21, 31);
console.log("piece of the alphabet: " + pieceOfTheAlphabet);

// .startsWith()
let words = "Apple, Baby, Carrot, Dog, Baby";
console.log("does the words variable start with 'Carrot': " + words.startsWith('Carrot'));
console.log("does the words variable start with 'Apple': " + words.startsWith('Apple'));

// .endsWith()
console.log("does the words variable end with 'Apple': " + words.endsWith('Apple'))
console.log("does the words variable end with 'Baby': " + words.endsWith('Baby'))

// .replace()

console.log()
console.log("'words' variable: " + words)
console.log()

let newWords = words.replace("Apple", "Alphabet")

console.log("lets replace the word 'Apple', with the word 'Alphabet' in the words variable: " + newWords)

// .replaceAll()
newerWords = newWords.replaceAll("Baby", "Boba")

console.log("lets replace ALL instances of the word 'Baby', with the word 'Boba' in the words variable: " + newWords)


// .lastIndexOf()
console.log()
console.log("the index of the last occurence of the word 'Boba' in the words variable: " + newerWords.lastIndexOf("Boba"))

// charCodeAt()

console.log(`the unicode # for the letter "${txt1[5]}" is: ${txt1.charCodeAt(5)}`)
// fromCharCode()

// includes()

// split()

// trim()