// let snackChoice = 1
// let vendingMachine = {
//     snacks: [
//         {
//             item: 1,
//             name: 'potato chips',
//             price: 1
//         },
//         {
//             item: 2,
//             name: 'candy',
//             price: 0.50
//         },
//         {
//             item: 3,
//             name: 'pretzels',
//             price: 0.75
//         }
//     ],
//     vend: function (choice) {
//         switch (choice) {
//             case choice:
//                 return this.snacks[choice - 1]
//                 break;
//             // case 1:
//             //     return this.snacks[0]
//             // case 2:
//             //     return this.snacks[1]
//             //     break;
//             // case 3:
//             //     return this.snacks[2]
//             //     break;

//             default:
//                 return 'invalid entry'
//                 break;
//         }
//     }
// }

// console.log(vendingMachine.vend(snackChoice))



let string = 'apple'.split('')
let counter = 0;
let matcher = []
for (i = 0; i < string.length - 1; i++) {
    // for (j = 1; j < string.length; j++) {
    if (string[i] === matcher) {
        matcher = string[i]
        counter++
        // 

    }
}
console.log(counter)
// console.log(createObject(string))
// console.log(string)