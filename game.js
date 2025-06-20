// Simple Calculator Program in JavaScript (Console-based)

// Function to perform calculations
function calculate(num1, num2, operator) {
   switch (operator) {
       case "+":
           return num1 + num2;
       case "-":
           return num1 - num2;
       case "*":
           return num1 * num2;
       case "/":
           return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
       default:
           return "Error: Invalid operator";
   }
}

// Function to run the calculator
function runCalculator() {
   const readline = require('readline');
   const rl = readline.createInterface({
       input: process.stdin,
       output: process.stdout
   });

   rl.question("Enter the first number: ", (input1) => {
       const num1 = parseFloat(input1);
       if (isNaN(num1)) {
           console.log("Error: Invalid number");
           rl.close();
           return;
       }

       rl.question("Enter the operator (+, -, *, /): ", (operator) => {
           rl.question("Enter the second number: ", (input2) => {
               const num2 = parseFloat(input2);
               if (isNaN(num2)) {
                   console.log("Error: Invalid number");
               } else {
                   const result = calculate(num1, num2, operator);
                   console.log(`Result: ${result}`);
               }
               rl.close();
           });
       });
   });
}

// Run the calculator
runCalculator();
