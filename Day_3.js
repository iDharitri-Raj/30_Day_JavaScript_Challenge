// Day 3: Control Structures

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 

let num1 = -20
if (num1 > 0) {
    console.log('Positive')
}
else if (num1 < 0) {
    console.log('Negative')
}
else {
    console.log('Zero')
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 12
if (age >= 18) {
    console.log('The person is eligible to vote.')
}
else {
    console.log('The person is not eligible to vote.')
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let val1 = 12, val2 = 5, val3 = 7
if (val1 > val2) {
    if (val1 > val3) console.log(val1)
    else console.log(val3)
}
else {
    if (val2 > val3) console.log(val2)
    else console.log(val3)
}

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 

let day = 3
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 67
switch (true) {
    case (score >= 85):
        console.log('A')
        break
    case (score >= 70):
        console.log('B')
        break
    case (score >= 55):
        console.log('C')
        break
    case (score >= 40):
        console.log('D')
        break
    case (score >= 25):
        console.log('E')
        break
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num2 = 5
let isEven = (num2 % 2 == 0) ? 'Even' : 'Odd'
console.log(isEven)

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2001
if (year % 4 == 0 && year % 400 == 0) {
    console.log("The year is a leap year")
}
else console.log("The year is not a leap year")

// Feature Request:

// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

let num3 = 23
if (num3 > 0) {
    console.log('Positive')
}
else if (num3 < 0) {
    console.log('Negative')
}
else {
    console.log('Zero')
}

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

let age1 = 45
if (age1 >= 18) {
    console.log('The person is eligible to vote.')
}
else {
    console.log('The person is not eligible to vote.')
}

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name. 

let day_num = 7
switch (day_num) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
}

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

let marks = 85
switch (true) {
    case (marks >= 85):
        console.log('A')
        break
    case (marks >= 70):
        console.log('B')
        break
    case (marks >= 55):
        console.log('C')
        break
    case (marks >= 40):
        console.log('D')
        break
    case (marks >= 25):
        console.log('E')
        break
}

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

let year1 = 2003
if (year1 % 4 == 0 || year1 % 400 == 0) {
    console.log("The year is a leap year")
}
else console.log("The year is not a leap year")