// Day 4: Loops

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} =`, 5 * i)
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0, num = 1
while (num <= 10) {
    sum += num
    num++
}
console.log(sum)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let val = 10
while (val > 0) {
    console.log(val)
    val--
}

// Activity 3: Do... While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let i = 1
do {
    console.log(i)
    i++
} while (i <= 5)

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let fact = 1, number = 5
do {
    fact *= number
    number--
} while (number > 0)
console.log(fact)

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:

for (let i = 1; i <= 5; i++) {
    let row = ''
    for (let j = 1; j <= i; j++) {
        row += '* '
    }
    console.log(row)
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i == 5) continue
    console.log(i)
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break, statement.

for (let i = 1; i <= 10; i++) {
    if (i == 7) break
    console.log(i)
}

// Feature Request:

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let num2 = 1
while (num2 <= 10) {
    console.log(num2)
    num2++
}

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop. 

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} =`, 5 * i)
}

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.

for (let i = 1; i <= 5; i++) {
    let row = ''
    for (let j = 1; j <= 5; j++) {
        row += '* '
    }
    console.log(row)
}

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

let add = 0, val1 = 1
while (val1 <= 10) {
    add += val1
    val1++
}
console.log(add)

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

let factorial = 1, value = 6
do {
    factorial *= value
    value--
} while (value > 0)
console.log(factorial)