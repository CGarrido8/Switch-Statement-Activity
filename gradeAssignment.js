// Prompt the user to enter their score
let score = prompt("Enter your score:");

// Determine the grade based on score ranges
if (score >= 90) {
    console.log("Your grade is: Excellent");
} else if (score >= 80) {
    console.log("Your grade is: Good");
} else if (score >= 70) {
    console.log("Your grade is: Fair");
} else {
    console.log("Your grade is: Needs Improvement");
}
