

const dayOfTheWeek = Math.floor(Math.random() * 7)
const dayName = "Monday"
switch (dayName) {
    case "Monday":
        console.log("Happy Monday!")
        break;
    case "Tuesday":
        console.log("Happy Taco Tuesday")
        break;
    case "Wednesday":
        console.log("Happy Humpday")
        break;
    case "Thursday":
        console.log("Happy Thursday")
        break;
    case "Friday":
        console.log("TGIF")
        break;
    case "Saturday":
        console.log("Happy Saturday! It's the freakin weekend. ")
        break;
    case "Sunday":
        console.log("Happy Sunday")
        break;
    default:
        console.log("Invalid Day")
        break;
}