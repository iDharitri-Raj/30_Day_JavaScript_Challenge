// Day 12: Error Handling

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function name() {
    throw new Error()
}

try {
    name()
}
catch (error) {
    console.error("Something went wrong")
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divide(a, b) {
    if (b == 0) throw new Error("Divisible By Zero is not allowed")
    return a / b
}
try {
    console.log(divide(1, 0))
}
catch (error) {
    console.error("Error occurred: ", error.message)
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function division(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.")
        }
        return a / b
    } catch (error) {
        console.error("Error occurred:", error.message)
    } finally {
        console.log("Division operation completed.")
    }
}
console.log(division(8, 0));
console.log(division(8, 2));

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
    }
}

function throwError() {
    throw new CustomError("Oops! Something went wrong.");
}

try {
    throwError();
} catch (error) {
    console.error("Caught custom error:", error.message);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class InputError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new InputError("Please enter a non-empty string !!")
    }
}

try {
    let user_input = ''
    validateInput(user_input)
    console.log("Input is valid : ", user_input)
} catch (error) {
    console.error(error.message)
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.

function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNum = Math.random()
            if (randomNum > 0.5) {
                resolve("Promise resolved successfully.")
            }
            else {
                reject(new Error("Promise rejected."))
            }
        }, 1000);
    })
}
randomPromise()
    .then(result => console.log(result))
    .catch(error => console.error("Error occurred: ", error.message));

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error("Caught error in async function:", error.message);
    }
}
handlePromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console.

const invalidUrl = 'https://google.com/invalid-url';

fetch(invalidUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error.message);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
    const invalidUrl = 'https://google.com/invalid-url';

    try {
        const response = await fetch(invalidUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Fetch error in async function:', error.message);
    }
}
fetchData();