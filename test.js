// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Function to divide two numbers
function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

// Function to calculate the percentage
function percentage(x, y) {
    return (x / y) * 100;
}

// Main calculator function
function calculator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Select operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Percentage");

    readline.question("Enter choice (1/2/3/4/5): ", function(choice) {
        if (['1', '2', '3', '4', '5'].includes(choice)) {
            readline.question("Enter first number: ", function(num1) {
                readline.question("Enter second number: ", function(num2) {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);

                    let result;
                    switch (choice) {
                        case '1':
                            result = add(num1, num2);
                            console.log(`${num1} + ${num2} = ${result}`);
                            break;
                        case '2':
                            result = subtract(num1, num2);
                            console.log(`${num1} - ${num2} = ${result}`);
                            break;
                        case '3':
                            result = multiply(num1, num2);
                            console.log(`${num1} * ${num2} = ${result}`);
                            break;
                        case '4':
                            result = divide(num1, num2);
                            console.log(`${num1} / ${num2} = ${result}`);
                            break;
                        case '5':
                            result = percentage(num1, num2);
                            console.log(`${num1} is ${result}% of ${num2}`);
                            break;
                    }
                    readline.close();
                });
            });
        } else {
            console.log("Invalid input");
            readline.close();
        }
    });
}

// Run the calculator
calculator();