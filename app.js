// Dream Application: EcoQuest Tracker

// Module: Values, Data Types, and Operations
// Skill: Storing and operating on numbers and strings
let userName = "Shehnaz"; // String data type
let basePoints = 50; // Number data type
let bonusPoints = 15; // Number data type
let totalPoints = basePoints + bonusPoints; // Operations: Addition

// Module: Building Arrays
// Skill: Create an array with a fixed or variable number of elements
let habitList = ["Recycle", "Compost", "Save Water", "Use Public Transit"];

// Module: Using Arrays
// Skill: Accessing and updating elements in an array
habitList.push("Plant a Tree"); // Adding an item
let firstHabit = habitList[0]; // Accessing the first element

// Module: Control Structures and Logic
// Skill: Using boolean expressions and conditional logic
let hasRecycled = true;
let hasComposted = false;

if (hasRecycled && hasComposted) {
    totalPoints += 20;
} else if (hasRecycled || hasComposted) {
    totalPoints += 5; // Adds 5 points if at least one task is done
}

// Module: Stringing Characters Together
// Skill: Template literals
let userSummary = `Welcome back, ${userName}! You have earned a total of ${totalPoints} points.`;
console.log(userSummary);

// Module: Working With Loops
// Skill: Iterating through an array using a for loop
console.log("\n--- Your Active Habits ---");
for (let i = 0; i < habitList.length; i++) {
    console.log(`${i + 1}: ${habitList[i]}`);
}
