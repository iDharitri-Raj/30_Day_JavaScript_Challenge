// Day 8: ES6+ Features

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "Dharitri"
let age = 20
console.log(`${name} is ${age} years old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.

let multiline = `hello, 
this is
me.`
console.log(multiline);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [18, 20, 22]
let [num1, num2] = arr
console.log(num1, num2);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let obj = {
    title: "Romeo and Juliet",
    author: "William Shakespeare"
}

let { title, author } = obj
console.log(title, author);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let newArr = [...arr, 12, 23, 34]
console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sum(1, 2, 3, 4));

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(num, value = 1) {
    return num * value
}
console.log(product(5, 2));
console.log(product(4, 1));

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let my_name = "Dharitri"


const person = {
    my_name,
    greet() {
        console.log('Hello!');
    }
};
console.log(person);
person.greet();

//  Task 9: Create an object with computed property names based on variables and log the object to the console.

const about_me = {
    my_name,
    age
}
console.log(about_me);

// Feature Request:

// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

let str1 = "Hello"
let person_name = "Yaman"
console.log(`${str1}, ${person_name}.`);

let multi_line_str = `hello, 
this is
a 
multiline string`
console.log(multi_line_str);

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

let num_arr = [18, 20, 22]
let [val1, val2] = arr
console.log(val1, val2);

let book_obj = {
    title_of_book: "Romeo and Juliet",
    author_of_book: "William Shakespeare"
}

let { title_of_book, author_of_book } = book_obj
console.log(title_of_book, author_of_book);

// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);

const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(rest);

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.

function multiply(num, value = 1) {
    return num * value
}
console.log(multiply(5, 2));

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

const myself = {
    my_name,
    age
}
console.log(myself);