// Day 11: Promises and Async/Await

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This promise is resolved with this message");
    }, 2000);
})

promise1.then(message => console.log(message));

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("This promise is rejected with this message");
    }, 2000);
})

promise2.catch(error => console.log(error));

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData = (message, delay) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(message);
        resolve();
    }, delay);
})

fetchData("Fetching user data...", 1000)
    .then(() => fetchData("Fetching posts...", 1000))
    .then(() => fetchData("Fetching comments...", 1000))
    .then(() => console.log("All data fetched !"))

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const resolvePromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved value after 2 secs")
    }, 2000);
})

const asyncFunc = async () => {
    const result = await resolvePromise();
    console.log(result);
}
asyncFunc()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const rejectPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected value after 2 secs")
    }, 2000);
})

const asyncFunctionWithError = async () => {
    try {
        const result = await rejectPromise();
        console.log(result);
    }
    catch (error) {
        console.error(error);
    }
}
asyncFunctionWithError()

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("error:", error))

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

const fetchDataAsync = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("error:", error)
    }
};
fetchDataAsync()

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

let first_promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I will be resolved first")
    }, 4000);
})


let second_promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I will be resolved last")
    }, 5000);
})


let third_promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("I will surely be resolved")
    }, 6000);
})

Promise.all([first_promise, second_promise, third_promise])
    .then(values => console.log(values))
    .catch(error => console.log(error))

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([first_promise, second_promise, third_promise])
    .then(value => console.error(value))