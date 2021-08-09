// question #1

person = 16
voteAge = 18

timeToVote = voteAge - person

// if (person >= 18) {
//     console.log("We want YOU to vote!")
// }
// if (timeToVote === 1) {
//     console.log("Uh oh! CAN'T VOTE yet, you've got " + timeToVote + " more year to go")
// }
// else {
//     console.log("Uh oh! Can't vote yet, you've got " + timeToVote + " more years to go before you can vote.")
// }


person >= 18 ? console.log("We want YOU to vote!") : timeToVote === 1 ? console.log("Uh oh! CAN'T VOTE yet, you've got " + timeToVote + " more year to go") :
    console.log("Uh oh! Can't vote yet, you've got " + timeToVote + " more years to go before you can vote.")

// question #2

num1 = -1

if (num1 < 0) {
    console.log("You're NEGATIVE. Keep that negative energy away from me, bro 🤨")
}

else {
    console.log("POSITIVE vibes only 😌")
}

// question #3

num2 = 43

if (num2 % 2 === 0) {
    console.log("What EVEN???")
}

else {
    console.log("Well, that's ODD...")
}

//lab 1 

// question # 1

num1 = Math.floor(Math.random() * 10)
num2 = Math.floor(Math.random() * 10)

if (num1 > num2) {
    console.log(`Number 1: ${num1} is larger than Number 2: ${num2}`)
}
else if (num1 < num2) {
    console.log(`Number 2: ${num2} is larger than Number 1: ${num1}`)
}
else if (num1 === num2) {
    console.log(num1 + " and " + num2 + " are equal")
}

else {
    console.log("Invalid comparison")
}


//question # 2

grade = Math.floor(Math.random() * 100)

if (grade >= 90) {
    console.log(`You have a ${grade} average, so you have a A grade. Keep up the hard work.`)
}

else if (grade >= 80 && grade < 90) {
    console.log(`You have a ${grade} average, so you have a B grade. Great work so far.`)
}

else if (grade >= 70 && grade < 80) {
    console.log(`You have a ${grade} average, so you have a C grade. Good work, but you still have some room to grow.`)
}

else if (grade >= 55 && grade < 70) {
    console.log(`You have a ${grade} average, so you have a D grade. No worries. Try getting a tutor for some extra help!`)
}

else if (grade < 55 && grade >= 0) {
    console.log(`You have a ${grade} average, so you have an F grade. Please reach out for some tutoring to get you back on track!`)
}

else {
    console.log("error")
}

// question # 3 

date = new Date()
hour = date.getHours()
welcome = hour

if (welcome === 5 || welcome <= 11) {
    console.log("Good Morning")
}

else if (welcome === 12 || welcome <= 16) {
    console.log("Good Afternoon")
} 

else {
    console.log("Hey there")
}