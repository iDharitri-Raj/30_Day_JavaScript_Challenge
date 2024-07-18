// Day 6: Arrays

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5]
console.log(arr)

// Task 2: Access the first and last elements of the array and log them to the console.
let first_element = arr[0]
console.log(first_element)
let last_element = arr[arr.length - 1]
console.log(last_element)

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(6)
console.log(arr)

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop()
console.log(arr)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr.shift()
console.log(arr)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(7)
console.log(arr)

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let newArr = arr.map(double)
function double(num) {
    return 2 * num
}
console.log(newArr)

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

function even(num) {
    return num % 2 == 0
}
let evenArr = arr.filter(even)
console.log(evenArr)

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let sumOfArr = arr.reduce(sum, 0)
function sum(res, num) {
    return res + num
}
console.log(sumOfArr)

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

arr.forEach((num) => {
    console.log(num)
})

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8]]
console.log(matrix)

// Task 13: Access and log a specific element from the two-dimensional array.

let ele = matrix[1][3]
console.log(ele)

// Feature Request:

// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.

let anotherArr = [1, 2, 3, 4, 5]
console.log(anotherArr)
anotherArr.push(6)
console.log(anotherArr)
anotherArr.pop()
console.log(anotherArr)
anotherArr.shift()
console.log(anotherArr)
anotherArr.unshift(7)

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.

let newArray = anotherArr.map(twice)
function twice(num) {
    return 2 * num
}
console.log(newArray)

let evenArray = anotherArr.filter(isEven)
function isEven(num) {
    return num % 2 == 0
}
console.log(evenArray)

let sumOfArray = anotherArr.reduce(sum, 0)
function sum(res, num) {
    return res + num
}
console.log(sumOfArray)

// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.

for (let i = 0; i < anotherArr.length; i++) {
    console.log(anotherArr[i])
}

anotherArr.forEach((num) => {
    console.log(num)
})

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

let two_d_array = [[1, 2, 3, 4], [5, 6, 7, 8]]
console.log(two_d_array)
two_d_array[1][2] = 12
console.log(two_d_array)