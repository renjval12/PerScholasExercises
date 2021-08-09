let num = [10, 8, 5, 1]
// index:   0  1  2  3
for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] > num[j]) {
            let swap;
            swap = num[i]
            num[i] = num[j]
            num[j] = swap
        }
    }
}
