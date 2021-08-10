let student = {
    fname: 'Jane',
    lname: 'Doe',
    grade: 9,
    class: () => {
        switch (this.grade) {
            case 9:
                return 'freshman'
                break;
            case 10:
                return 'sophomore'
                break;
            case 11:
                return 'junior'
                break;
            case 12:
                return 'senior'
                break;
            default:
                return "you're not in high school"
                break;
        }
    },
    age: 14,
    gender: 'girl',
    mathGrade: 80,
    scienceGrade: 75,
    englishGrade: 90,
    average: () => {
        var sum = student.mathGrade + student.scienceGrade + student.englishGrade
        let avg = Math.floor(sum / 3)
        return avg
    }
}

console.log(student.average())

// mathGrade = 75
// scienceGrade = 80
// englishGrade = 90
// avg = () => {
//     // let sum = this.mathGrade + this.scienceGrade + this.englishGrade
//     let sum = mathGrade + scienceGrade + englishGrade
//     let avg = sum / 3
//     return avg
// }

// console.log(avg())