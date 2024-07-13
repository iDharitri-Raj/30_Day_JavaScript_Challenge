// Day 1 : Variables and Data Types

// Activity 1 : Variable Declaration

// Task 1 : Declare a variable using 'var', assign it a number, and log the value to the console.

var num = 7
console.log(num)          // 7

// Task 2 : Declare a variable using 'let', assign it a string, and log the value to the console.

let my_name = "Dharitri"
console.log(my_name)          // Dharitri

// Activity 2 : Constant Declaration

// Task 3 : Declare a variable using 'const', assign it a boolean value, and log the value to the console.

const value = true
console.log(value)           // true

// Activity 3 : Data Types

// Task 4 : Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the 'typeof' operator.

let num2 = 16
console.log(typeof num2)          // number

let my_last_name = "Raj"
console.log(typeof my_last_name)         // string

let learning = true
console.log(typeof learning)        // boolean

let obj1 = {
    'name': 'Dharitri Raj',
    'age': 20,
    'gender': 'Female'
}
console.log(typeof obj1)        // object

let arr = ['hello', 25, 'New York', false]
console.log(typeof arr)          // object

// Activity 4 : Reassigning Variables

// Task 5 : Declare a variable using 'let', assign it an initial value, reassign a new value, and log both values to the console.

let value2 = 34
console.log(value2)         // 34

value2 = true
console.log(value2)         // true

// Activity 5 : Understanding 'const'

// Task 6 : Try reassigning a variable declared with 'const' and observe the error.

const new_var = false

new_var = "Hi"
console.log(new_var)       // TypeError: Assignment to constant variable.





// Feature Request :

// 1. Variable Types Console Log : Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let val = 43
console.log(val, typeof val)

let full_name = "Dharitri Raj"
console.log(full_name, typeof full_name)

let output = true
console.log(output, typeof output)

let obj2 = {
    'C++': 'Bjarne Stroustrup',
    'Python': 'Guido van Rossum',
    'JavaScript': 'Brendan Eich'
}
console.log(obj2, typeof obj2)

let arr2 = [97, 88, 79, 61, 52]
console.log(arr2, typeof arr2)

// 2. Reassignment Demo : Create a script that demonstrates the difference in behavior between 'let' and 'const' when it comes to reassignment.

let no = 106
no = 34
console.log(no)       // We can reassign a let variable with no error, but we can't redeclare a let variable

const greet = "Hi"
greet = "Hello"
console.log(greet)        // We can't reassign and redeclare a const variable as it is constant, it's value can't be changed and it gives TypeError
