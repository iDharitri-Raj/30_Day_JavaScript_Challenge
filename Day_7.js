// Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
    "title": "Romeo and Juliet",
    "author": "William Shakespeare",
    "year": 1597
}
console.log(book);

// Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.title_and_author = function () {
    return book.title + " is written by " + book.author
}
console.log(book.title_and_author());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.update_year = function (year) {
    book.year = 1587
}
book.update_year(book.year);
console.log(book);

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
    "name": "Gyan Ganga",
    "books": [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            year: 1813
        }
    ]
}
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);
console.log(library.books[2].title);

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.title_and_year = function () {
    return this.title + " is written in " + this.year
}
console.log(book.title_and_year());

// Activity 5: Object Iteration

// Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

for (let property in book) {
    console.log(property, book[property]);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));

// Feature Request:

// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

let books = {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960,
    title_and_author: function () {
        return books.title + " is written by " + books.author
    }
}
console.log(books.title);
console.log(books.author);
console.log(books.year);
console.log(books.title_and_author());

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.

let libraryObj = {
    "name": "City Library",
    "books": [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien"
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
        }
    ]
}
console.log(libraryObj);

// 3. Object Iteration Script: Write a script that demonstrates iterating over an obiect's properties using for... in loop and Object.keys/Object.values

for (let property in libraryObj) {
    console.log(property, libraryObj[property]);
}

Object.keys(libraryObj).forEach((key) => {
    console.log(key);
})

Object.values(libraryObj).forEach((value) => {
    console.log(value);
})

