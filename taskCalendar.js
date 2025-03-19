// Prompt the user to enter a day
let day = prompt("Enter a day of the week:").toLowerCase(); // Convert input to lowercase for consistency

// Use switch statement to assign tasks based on the day
switch (day) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Attend meetings.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Study for exams.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Complete project work.");
        break;
    case "friday":
        console.log("Your task for Friday is: Review the week's work.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Relax and have fun.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Plan for the upcoming week.");
        break;
    default:
        console.log("Invalid day entered. Please enter a valid day.");
}
