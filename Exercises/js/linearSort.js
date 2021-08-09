var arr = [10, 3, -1, 5]
console.log(`length of "arr" array: ${arr.length}`)
//output should be [10 5 3 -1]
for (let i = 0; i < (arr.length - 1); i++) {
    console.log(`value of i: ${arr[i]} / position of ${arr[i]}: ${i}`)
    console.log(`length of "arr" array: ${arr.length}`)

    for (let j = i + 1; j < arr.length; j++) {
        console.log(`value of i: ${arr[i]} / position of ${arr[i]}: ${i}`)
        console.log(`value of i: ${arr[j]} / position of ${arr[j]}: ${j}`)
        if (arr[i] > arr[j]) {
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            console.log(`value of i: ${arr[i]} / position of ${arr[i]}: ${i}`)

        }
    }

}

