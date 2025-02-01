// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = { firstName: "John", lastName: "Doe", age: 25 };

// Logging values and types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        default: alert("Invalid operation"); return;
    }

    alert(`Result: ${result}`);
}

// Greeting Function
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

document.addEventListener("DOMContentLoaded", () => {
    let dynamicContent = document.getElementById("dynamic-content");
    let greeting = greetUser("User");
    dynamicContent.innerHTML = `<p>${greeting}</p>`;
    
    // Modify the heading text
    document.getElementById("main-heading").textContent = "JavaScript in Action!";

    // Add dynamic content inside the div
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This content was added dynamically using JavaScript.";
    dynamicContent.appendChild(newParagraph);

    // Loop to display numbers 1 to 10
    let numberList = document.getElementById("number-list");
    for (let i = 1; i <= 10; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }

    // Voting Eligibility Check
    let userAge = parseInt(prompt("Enter your age:"));
    let message = userAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
    document.body.innerHTML += `<p>${message}</p>`;
});
