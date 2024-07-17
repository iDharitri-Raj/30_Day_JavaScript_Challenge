// Day 5: Functions

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function check(i) {
    if (i % 2 == 0)
        return "Even"
    else
        return "Odd"
}
let j = check(2)
console.log(j)

// Task 2: Write a function to calculate the square of a number and return the result.

function calculateSquare(i) {
    return i * i
}
let sq = calculateSquare(2)
console.log(sq)

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2
}
let greaterNum = findMax(34, 45)
console.log(greaterNum)

// Task 4: Write a function expression to concatenate two strings and return the result.

function concat(str1, str2) {
    return str1 + str2
}
let newStr = concat("Dha", "ritri")
console.log(newStr)

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (a, b) => {
    return a + b
}
console.log(sum(3, 4))

// Task 6: Write an arrow function to check if a string contains a specific character and retum a boolean value.

let checkString = (strng, ch) => {
    return strng.includes(ch)
}
console.log(checkString("Dharitri", 's'))

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function prod(num1, num2 = 10) {
    return num1 * num2
}
console.log(prod(4))

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 20) {
    return `Hello, Mr. ${name}. I'm glad you turned ${age} today.`
}
console.log(greet("Yaman"))

// Activity 5: Higher-Order Functions


// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function greetings(hello, n) {
    for (let i = 0; i < n; i++) {
        hello()
    }
}

function greeting() {
    console.log("hello")
}

greetings(greeting, 5)

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function prod_and_div(prod, div, value) {
    let result = prod(value)
    return div(result)
}

function product(num) {
    return num * 5
}

function divide(num) {
    return num / 10
}

console.log(prod_and_div(product, divide, 23))

// Feature Request:

// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

function toCheck(i) {
    if (i % 2 == 0)
        return "Even"
    else
        return "Odd"
}
let val = toCheck(45)
console.log(j)

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.

function square(i) {
    return i * i
}
let res = square(12)
console.log(res)

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.

function concat(str1, str2) {
    return str1 + str2
}
let newString = concat("Hello ", "Dharitri")
console.log(newString)

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

let add = (a, b) => {
    return a + b
}
console.log(add(67, 54))

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

function greetPeople(hi, n) {
    for (let i = 0; i < n; i++) {
        hi()
    }
}

function hello() {
    console.log("hello")
}

greetPeople(hello, 2)

